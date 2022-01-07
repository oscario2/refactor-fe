///////////////
// INTERFACES
///////////////

export interface IActionProps<T> {
  /**
   * callback for debugging, testing or to use in storybook
   */
  onAction?: (action: T) => void;
}
