import { CSSProperties, FlattenSimpleInterpolation } from 'styled-components';

///////////////
// INTERFACES
///////////////

export interface ITestSuite<T extends string> {
  /** render type */
  type: string;
  /** class name to find */
  find: string;
  /** styled component to verify from */
  styles: Record<T, FlattenSimpleInterpolation>;
  /** styles to verify */
  rules: (keyof CSSProperties)[];
  /** exclude from test */
  exclude?: boolean;
  /** only run this test */
  only?: boolean;
}
