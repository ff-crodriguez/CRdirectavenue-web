import { Meta } from '@storybook/react';

import { colors } from '../../shared/theme/Constants';
import Styled from './Colors.styled';
const changeColor: Array<string> = [
  '#FFFFFF',
  '#E7FEC1',
  '#F3F2F0',
  'rgba(24, 24, 24, 0.12)',
  '#E5E5E5',
];
const EmptyColorContainer = () => {
  return <> </>;
};

const meta: Meta<typeof EmptyColorContainer> = {
  component: EmptyColorContainer,
};

/**
 * Renders different variations of the `Colors` palette component by mapping through the `Color` options.
 * @returns JSX.Element
 */
export const ColorsVariations = () => {
  return (
    <>
      <Styled.Box>
        {Object.entries(colors).map(([colorCategory, colorValues]) => (
          <Styled.TextColorBox key={colorCategory} id={colorCategory}>
            <Styled.Header variant="h6">
              {colorCategory.charAt(0).toUpperCase() + colorCategory.slice(1)}
            </Styled.Header>
            <Styled.Container>
              {Object.entries(colorValues).map(([colorName, colorValue]) => (
                <Styled.ColorBox
                  key={colorName}
                  bgcolor={colorValue}
                  color={
                    changeColor.findIndex((color) => color === colorValue) >= 0
                      ? 'Black'
                      : 'white'
                  }>
                  <Styled.ButtonLabel variant="body2">
                    {colorName.charAt(0).toUpperCase() +
                      colorName.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2')}
                  </Styled.ButtonLabel>
                </Styled.ColorBox>
              ))}
            </Styled.Container>
          </Styled.TextColorBox>
        ))}
      </Styled.Box>
    </>
  );
};

export default meta;
