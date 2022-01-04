///////////////
// INTERFACES
///////////////

export interface IActionProps {
  /**
   * callback for debugging, testing or to use in storybook
   */
  onAction?: (event: TActionEvent) => void;
}

///////////////
// ENUMS
///////////////

export enum EActionEvent {
  /**
   * component is idle through e.g click
   */
  Idle = 0,

  /**
   * component is loading
   */
  Loading,

  /**
   * component is active through e.g click
   */
  Active,
}

///////////////
// TYPES
///////////////

export type TActionEvent =
  | {
      event: EActionEvent.Loading;
      loading: boolean;
    }
  | {
      event: EActionEvent.Active;
    }
  | {
      event: EActionEvent.Idle;
    };