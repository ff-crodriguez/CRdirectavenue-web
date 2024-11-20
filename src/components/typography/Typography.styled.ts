import {
  css,
  Box as MuiBox,
  Typography as MuiTypography,
  styled,
} from '@mui/material';

const Typography = styled(MuiTypography)(css`
  padding: 4px;
  margin: 5px;
`);

const Box = styled(MuiBox)(css`
  display: flex;
`);

export default {
  Typography,
  Box,
};
