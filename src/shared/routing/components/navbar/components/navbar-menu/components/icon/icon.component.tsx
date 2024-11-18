import { Box, IconButton, type SvgIconOwnProps } from '@mui/material';
import { forwardRef, useMemo, type MouseEventHandler } from 'react';

import { ICON_MAPPER, type IconName } from './utils';

interface IIconProps extends Omit<SvgIconOwnProps, 'children'> {
  name: IconName;
  disabled?: boolean;
  padding?: number;
  height?: number;
  onClick?: MouseEventHandler<HTMLElement>;
}

const Icon = forwardRef<HTMLDivElement, IIconProps>(
  ({ name, disabled, padding, height, onClick, sx, ...rest }, ref) => {
    const Element = useMemo(() => ICON_MAPPER[name], [name]);
    const icon = <Element {...rest} sx={{ display: 'block', ...sx }} />;

    return onClick ? (
      <IconButton
        onClick={onClick}
        sx={{ padding, height }}
        disabled={disabled}>
        {icon}
      </IconButton>
    ) : (
      <Box
        ref={ref}
        component="span"
        padding={padding}
        height={height}
        {...rest}>
        {icon}
      </Box>
    );
  },
);

export { Icon, IconName };
