/* eslint-disable react-refresh/only-export-components */
import {
  css,
  Box as MuiBox,
  Typography as MuiTypography,
  styled,
} from '@mui/material';

/**
 * Typography Mui style
 */
const Typography = styled(MuiTypography)(css`
  padding: 4px;
  margin: 5px;
`);

/**
 * Typography Mui box style
 */
const Box = styled(MuiBox)(css`
  display: flex;
`);

export default {
  Typography,
  Box,
};
