import { css } from 'styled-components';

// types
import type { IStyledTheme } from 'src/types/styles.types';
import { IButtonProps } from '../Button.types';

/**
 * ## declaration
 * this is where all the `themes` are defined/declared
 * `mixins` as styled-components calls them
 */

const base = css`
  line-height: 5px;
`;

const small = css`
  ${base}
  font-size: 10pt;
`;

const medium = css`
  ${base}
  font-size: 12pt;
`;

const large = css`
  ${base}
  font-size: 14pt;
`;

export const fontSizeStyles: IStyledTheme<IButtonProps['fontSize']> = {
  small,
  medium,
  large,
};
