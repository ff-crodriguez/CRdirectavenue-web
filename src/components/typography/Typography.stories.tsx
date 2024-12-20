import type { Meta } from '@storybook/react';

import { typography } from '../../shared/theme/Constants';
import Styled from './Typography.styled';

/**
 * Renders different variations of the `Typography` component by mapping through the `typography` options.
 * @returns JSX.Element
 */
export const TypographyVariations = () => {
  return (
    <>
      {Object.keys(typography).map((option) => {
        return (
          <Styled.Box key={option}>
            <Styled.Typography variant={option as keyof typeof typography}>
              Typography {option}
            </Styled.Typography>
          </Styled.Box>
        );
      })}
    </>
  );
};

/**
 * Configures the `Typography` component in Storybook for React.
 */
const meta: Meta<typeof TypographyVariations> = {
  component: TypographyVariations,
};

export default meta;
