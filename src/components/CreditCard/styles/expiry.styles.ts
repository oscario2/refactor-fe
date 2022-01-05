import { css, FlattenSimpleInterpolation } from 'styled-components';

// types
import { ECardState, TCardState } from '../CreditCard.types';

///////////////
// COLORS
///////////////

const color: Record<TCardState, string> = {
  [ECardState.idle]: '#fff',
  [ECardState.active]: '#fff',
  [ECardState.expired]: '#eb5757',
};

///////////////
// STYLES
///////////////

// base
const style = css`
  flex: 1;
  padding: 0 15px;
`;

//
const themes: Record<TCardState, FlattenSimpleInterpolation> = {
  /** @theme `idle` */
  [ECardState.idle]: css`
    ${style}
    color: ${color.idle};
  `,
  /** @theme `active` */
  [ECardState.active]: css`
    ${style}
    color: ${color.active};
  `,
  /** @theme `expired` */
  [ECardState.expired]: css`
    ${style}
    color: ${color.expired};
  `,
};

//
export { themes as expiryStyles };
