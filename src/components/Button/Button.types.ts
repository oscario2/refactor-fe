// `enum` to support typings for .jsx
export const EButtonFontSize = {
  small: 'small',
  medium: 'medium',
  large: 'medium',
} as const;

export type TButtonFontSize = keyof typeof EButtonFontSize;

export interface IButtonProps {
  fontSize: TButtonFontSize;
  fontWeight: 'normal' | 'bold';
}
