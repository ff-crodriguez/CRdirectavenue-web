/* eslint-disable react-refresh/only-export-components */
import {
  css,
  Box as MuiBox,
  Typography as MuiTypography,
  styled,
} from '@mui/material';

/**
 * Mui header box style
 */
const Header = styled(MuiTypography)(css`
  text-align: center;
`);

/**
 *  Mui box main container style
 */
const Box = styled(MuiBox)(css`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`);

/**
 *  Mui text color styles container
 */
const TextColorBox = styled(MuiBox)(css`
  margin: 5px;
  padding-top: 5px;
`);

/**
 *  Mui container style
 */
const Container = styled(MuiBox)(css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`);

/**
 *  Mui color container style
 */
const ColorBox = styled(MuiBox)(css`
  display: flex;
  align-items: center;
  padding: 2rem;
  border-radius: 0.8rem;
  border: 1px solid gray;
  font-weight: bold;
  text-align: center;
`);

/**
 * Button label styles
 */
const ButtonLabel = styled(MuiTypography)(css`
  text-align: center;
  width: 100%;
`);

export default {
  Box,
  ButtonLabel,
  Container,
  ColorBox,
  Header,
  TextColorBox,
};
