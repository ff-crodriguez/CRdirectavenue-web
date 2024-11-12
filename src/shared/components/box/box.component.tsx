import { type FC, type LegacyRef, type PropsWithChildren } from 'react';

import { FontWeights } from '@shared/theme';
import Styled from './box.styles';
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

interface IBoxProps extends PropsWithChildren {
  alignItems?: AlignItems;
  backgroundColor?: BackgroundColor;
  border?: number;
  borderColor?: BorderColor;
  borderRadius?: number;
  color?: Color;
  display?: Display;
  flex?: Flex;
  flexDirection?: FlexDirection;
  flexShrink?: FlexShrink;
  flexWrap?: FlexWrap;
  fontWeight?: keyof FontWeights;
  gap?: number;
  height?: Height;
  justifyContent?: JustifyContent;
  lineHeight?: LineHeight;
  margin?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mx?: number;
  my?: number;
  order?: Order;
  overflow?: Overflow;
  padding?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  px?: number;
  py?: number;
  position?: Position;
  ref?: LegacyRef<HTMLDivElement>;
  scrollBehavior?: ScrollBehavior;
  textAlign?: TextAlign;
  width?: Width;
}

export const Box: FC<IBoxProps> = ({ ref, children, ...rest }) => {
  const styledProps = Object.entries(rest).reduce(
    (prev, [key, value]) => ({ ...prev, [`$${key}`]: value }),
    {},
  );

  return (
    <Styled.Box {...styledProps} ref={ref}>
      {children}
    </Styled.Box>
  );
};
