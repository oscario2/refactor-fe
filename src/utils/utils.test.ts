import { CSSProperties, FlattenSimpleInterpolation } from 'styled-components';
// @ts-ignore
import { toJSON } from 'cssjson';

/**
 * - find rule in a css`` styled component
 * - TODO: support pseudo and nested selectors @oscario2
 * @param style
 * @param rule
 * @returns
 */
export const getStyledRule = (
  style: FlattenSimpleInterpolation,
  rule: (keyof CSSProperties)[],
) => {
  // `boxShadow` to `box-shadow`
  const rules = rule.map((r) => r.replace(/([A-Z])/g, '-$1').toLowerCase());

  // remove comments
  let pre = style.join('').replace(/[\/]+.*?\n/g, '');

  // remove spaces and multilines
  pre = pre.replace(/[\s]+/g, ' ');

  // map to json
  const { attributes } = toJSON(pre) as {
    attributes: Record<string, string>;
  };

  return rules.map((r) => attributes[r]);
};
