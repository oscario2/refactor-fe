import { css } from 'styled-components';

// types
import type { IStyledTheme } from 'src/types/styles.types';
import { IButtonProps } from '../Button.types';

const black = css`
  background: #000;
  color: #fff;
`;

const white = css`
  background: #fff;
  color: #000;
`;

export const colorStyles: IStyledTheme<IButtonProps['color']> = {
  black,
  white,
};
