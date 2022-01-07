import { CSSProperties, FlattenSimpleInterpolation } from 'styled-components';

///////////////
// TYPES
///////////////

// extend with psuedo elements
export type TPseudoProperty =
  | ':after'
  | ':before'
  | ':active'
  | ':hover'
  | ':disabled';
export type TCssProperty = keyof CSSProperties;

///////////////
// INTERFACES
///////////////

export interface ITestSuite<T extends string> {
  /** name of suite */
  name: string;
  /** classname to find */
  find: string;
  /** styled component to verify from */
  styles: Record<T, FlattenSimpleInterpolation>;
  /** styles to match */
  match: TCssProperty[];
  /** exclude from test */
  exclude?: boolean;
  /** only run this test */
  only?: boolean;
}
