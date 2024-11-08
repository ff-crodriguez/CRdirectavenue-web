import { useLocalStorage } from '@shared/hooks';
import { useCallback } from 'react';

import { Permission, printDebug, type IPermissions } from '../utils';

export const usePermissions = () => {
  const [permissions, setPermissions] = useLocalStorage<Permission[]>(
    'permissions',
    [],
  );

  const validateArrayOfPermissions = useCallback(
    (requiredPermissions: Permission[], operator: 'and' | 'or') =>
      operator === 'and'
        ? requiredPermissions.every((permission) =>
            permissions.includes(permission),
          )
        : requiredPermissions.some((permission) =>
            permissions.includes(permission),
          ),
    [permissions],
  );

  const validateAndOrPermissions = useCallback(
    (requiredPermissions: IPermissions) => {
      if (Array.isArray(requiredPermissions)) {
        return validateArrayOfPermissions(requiredPermissions, 'and');
      }

      const { and = [], or = [] } = requiredPermissions;

      return (
        validateArrayOfPermissions(and, 'and') &&
        validateArrayOfPermissions(or, 'or')
      );
    },
    [validateArrayOfPermissions],
  );

  const hasRequiredPermissions = useCallback(
    (requiredPermissions: IPermissions) => {
      if (Array.isArray(requiredPermissions)) {
        return requiredPermissions.length;
      }

      const { and = [], or = [] } = requiredPermissions;

      return and.length || or.length;
    },
    [],
  );

  const validatePermissions = useCallback(
    (requiredPermissions: IPermissions, debug?: string) => {
      printDebug(debug, 'requiredPermissions', requiredPermissions);
      let hasPermission = false;

      if (!permissions.length) {
        printDebug(debug, 'noPermission');
        hasPermission = !hasRequiredPermissions(requiredPermissions);
        printDebug(debug, 'hasPermission', hasPermission);
        return hasPermission;
      }
      if (!hasRequiredPermissions(requiredPermissions)) {
        printDebug(debug, 'noRequiredPermission');
        hasPermission = false;
        printDebug(debug, 'hasPermission', hasPermission);
        return hasPermission;
      }

      printDebug(debug, 'isAndOrPermission');
      hasPermission = validateAndOrPermissions(requiredPermissions);
      printDebug(debug, 'hasPermission', hasPermission);
      return hasPermission;
    },
    [permissions, hasRequiredPermissions, validateAndOrPermissions],
  );

  return { permissions, setPermissions, validatePermissions };
};
