import {
  Divider as MuiDivider,
  MenuItem as MuiMenuItem,
  dividerClasses,
} from '@mui/material';
import styled from 'styled-components';

const MenuItem = styled(MuiMenuItem)`
  line-height: 0;
  padding: ${({ theme }) => theme.spacing(0)};

  & > a,
  & > span {
    padding: ${({ theme }) => theme.spacing(3.5, 4)};
  }
`;

const Divider = styled(MuiDivider)(() => ({
  [`&.${dividerClasses.root}`]: {
    marginBottom: 0,
    marginTop: 0,
  },
}));

export default { MenuItem, Divider };
