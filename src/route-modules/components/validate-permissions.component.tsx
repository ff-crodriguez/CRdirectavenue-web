import { useMemo, type FC, type PropsWithChildren } from 'react';

import { useRouteModulesContext } from '../contexts';
import { validatePermissions, type Permissions } from '../utils';

type ValidatePermissionsProps = PropsWithChildren & {
  permissions: Permissions;
};

export const ValidatePermissions: FC<ValidatePermissionsProps> = ({
  permissions,
  children,
}) => {
  const { userPermissions } = useRouteModulesContext();

  const hasPermission = useMemo(
    () =>
      validatePermissions({
        requiredPermissions: permissions,
        userPermissions,
      }),
    [permissions, userPermissions],
  );

  return hasPermission ? children : null;
};
