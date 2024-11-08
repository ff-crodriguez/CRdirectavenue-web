import { useAuth, type IPermissions } from '@shared/auth';
import { useMemo, type FC, type PropsWithChildren } from 'react';

interface IValidatePermissionsProps extends PropsWithChildren {
  permissions: IPermissions;
}

export const ValidatePermissions: FC<IValidatePermissionsProps> = ({
  permissions,
  children,
}) => {
  const { validatePermissions } = useAuth();

  const hasPermission = useMemo(
    () => validatePermissions(permissions),
    [permissions, validatePermissions],
  );

  return hasPermission ? <>{children}</> : null;
};
