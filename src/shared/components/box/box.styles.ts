import styled, { css } from 'styled-components';

import { FontWeights } from '@shared/theme';
import {
  type AlignItems,
  type BackgroundColor,
  type BorderColor,
  type Color,
  type Display,
  type Flex,
  type FlexDirection,
  type FlexShrink,
  type FlexWrap,
  type Height,
  type JustifyContent,
  type LineHeight,
  type Order,
  type Overflow,
  type Position,
  type ScrollBehavior,
  type TextAlign,
  type Width,
} from './utils';

type StyledBoxProps = {
  $alignItems?: AlignItems;
  $backgroundColor?: BackgroundColor;
  $border?: number;
  $borderColor?: BorderColor;
  $borderRadius?: number;
  $color?: Color;
  $display?: Display;
  $flex?: Flex;
  $flexDirection?: FlexDirection;
  $flexShrink?: FlexShrink;
  $flexWrap?: FlexWrap;
  $fontWeight?: keyof FontWeights;
  $gap?: number;
  $height?: Height;
  $justifyContent?: JustifyContent;
  $lineHeight?: LineHeight;
  $margin?: number;
  $mb?: number;
  $ml?: number;
  $mr?: number;
  $mt?: number;
  $mx?: number;
  $my?: number;
  $order?: Order;
  $overflow?: Overflow;
  $padding?: number;
  $pb?: number;
  $pl?: number;
  $pr?: number;
  $pt?: number;
  $px?: number;
  $py?: number;
  $position?: Position;
  $scrollBehavior?: ScrollBehavior;
  $textAlign?: TextAlign;
  $width?: Width;
};

const Box = styled.div<StyledBoxProps>`
  ${({ $border }) =>
    typeof $border === 'number' &&
    css`
      border: ${$border}px solid;
    `};

  ${({ $borderColor, theme }) =>
    $borderColor &&
    css`
      border-color: ${$borderColor === 'border'
        ? theme.palette.grey[300]
        : theme.palette[$borderColor].main};
    `};
  align-items: ${({ $alignItems }) => $alignItems};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: ${({ $borderRadius, theme }) =>
    typeof $borderRadius === 'number'
      ? theme.spacing($borderRadius)
      : undefined};
  color: ${({ $color }) => $color};
  display: ${({ $display }) => $display};
  flex: ${({ $flex }) => $flex};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  flex-shrink: ${({ $flexShrink }) => $flexShrink};
  flex-wrap: ${({ $flexWrap }) => $flexWrap};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  gap: ${({ $gap, theme }) =>
    typeof $gap === 'number' ? theme.spacing($gap) : undefined};
  height: ${({ $height }) =>
    typeof $height === 'number' ? `${$height}px` : $height};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  line-height: ${({ $lineHeight }) => $lineHeight};
  order: ${({ $order }) => $order};
  overflow: ${({ $overflow }) => $overflow};
  position: ${({ $position }) => $position};
  scroll-behavior: ${({ $scrollBehavior }) => $scrollBehavior};
  text-align: ${({ $textAlign }) => $textAlign};
  width: ${({ $width }) =>
    typeof $width === 'number' ? `${$width}px` : $width};
  /* Margin */
  margin: ${({ theme, $margin }) =>
    typeof $margin === 'number' ? theme.spacing($margin) : undefined};
  margin-bottom: ${({ theme, $mb }) =>
    typeof $mb === 'number' ? theme.spacing($mb) : undefined};
  margin-left: ${({ theme, $ml }) =>
    typeof $ml === 'number' ? theme.spacing($ml) : undefined};
  margin-right: ${({ theme, $mr }) =>
    typeof $mr === 'number' ? theme.spacing($mr) : undefined};
  margin-top: ${({ theme, $mt }) =>
    typeof $mt === 'number' ? theme.spacing($mt) : undefined};
  ${({ $mx, theme }) =>
    typeof $mx === 'number' &&
    css`
      margin-left: ${theme.spacing($mx)};
      margin-right: ${theme.spacing($mx)};
    `};
  ${({ $my, theme }) =>
    typeof $my === 'number' &&
    css`
      margin-top: ${theme.spacing($my)};
      margin-bottom: ${theme.spacing($my)};
    `};
  /* Padding */
  padding: ${({ theme, $padding }) =>
    typeof $padding === 'number' ? theme.spacing($padding) : undefined};
  padding-bottom: ${({ theme, $pb }) =>
    typeof $pb === 'number' ? theme.spacing($pb) : undefined};
  padding-left: ${({ theme, $pl }) =>
    typeof $pl === 'number' ? theme.spacing($pl) : undefined};
  padding-right: ${({ theme, $pr }) =>
    typeof $pr === 'number' ? theme.spacing($pr) : undefined};
  padding-top: ${({ theme, $pt }) =>
    typeof $pt === 'number' ? theme.spacing($pt) : undefined};
  ${({ $px, theme }) =>
    typeof $px === 'number' &&
    css`
      padding-left: ${theme.spacing($px)};
      padding-right: ${theme.spacing($px)};
    `};
  ${({ $py, theme }) =>
    typeof $py === 'number' &&
    css`
      padding-top: ${theme.spacing($py)};
      padding-bottom: ${theme.spacing($py)};
    `};
`;

export default { Box };
