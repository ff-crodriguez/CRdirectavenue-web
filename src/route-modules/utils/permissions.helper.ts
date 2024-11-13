import { type Permissions } from './route-modules.types';

import {
  type ValidateArrayOfPermissionsParams,
  type ValidatePermissionsParams,
} from '.';

const validateArrayOfPermissions = ({
  requiredPermissions,
  userPermissions,
  operator,
}: ValidateArrayOfPermissionsParams) =>
  operator === 'and'
    ? requiredPermissions.every((permission) =>
        userPermissions.includes(permission),
      )
    : requiredPermissions.some((permission) =>
        userPermissions.includes(permission),
      );

const validateAndOrPermissions = ({
  requiredPermissions,
  userPermissions,
}: ValidatePermissionsParams) => {
  if (Array.isArray(requiredPermissions)) {
    return validateArrayOfPermissions({
      requiredPermissions,
      userPermissions,
      operator: 'and',
    });
  }

  const { and = [], or = [] } = requiredPermissions;

  return (
    validateArrayOfPermissions({
      requiredPermissions: and,
      userPermissions,
      operator: 'and',
    }) &&
    validateArrayOfPermissions({
      requiredPermissions: or,
      userPermissions,
      operator: 'or',
    })
  );
};

const hasRequiredPermissions = (requiredPermissions: Permissions) => {
  if (Array.isArray(requiredPermissions)) {
    return requiredPermissions.length;
  }

  const { and = [], or = [] } = requiredPermissions;

  return and.length || or.length;
};

export const validatePermissions = ({
  requiredPermissions,
  userPermissions,
}: ValidatePermissionsParams) => {
  if (!userPermissions.length) {
    return !hasRequiredPermissions(requiredPermissions);
  }
  if (!hasRequiredPermissions(requiredPermissions)) {
    return false;
  }
  return validateAndOrPermissions({
    requiredPermissions,
    userPermissions,
  });
};
