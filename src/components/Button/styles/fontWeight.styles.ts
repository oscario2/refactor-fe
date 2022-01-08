import { css } from 'styled-components';

// types
import type { IStyledTheme } from 'src/types/styles.types';
import { IButtonProps } from '../Button.types';

const normal = css`
  font-weight: 300;
`;

const bold = css`
  font-weight: 500;
`;

export const fontWeightStyles: IStyledTheme<IButtonProps['fontWeight']> = {
  normal,
  bold,
};
