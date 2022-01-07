import styled from 'styled-components';

// styles
import { fontSizeStyles, fontWeightStyles } from './themes';

// types
import type { IButtonProps } from './Button.types';

/**
 * ## implementation
 * where all the logic for themes/mixins are defined
 */

/** dynamic */
const Button = styled.button<IButtonProps>`
  ${({ fontSize }) => fontSizeStyles[fontSize]};
  ${({ fontWeight }) => fontWeightStyles[fontWeight]};
`;

export const Styled = {
  Button,
};

/** static, immutable */
const FlexContainer = styled.div`
  display: flex;
`;

export const Layout = {
  FlexContainer,
};
