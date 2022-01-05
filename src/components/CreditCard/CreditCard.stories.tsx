import { ComponentStory, ComponentMeta } from '@storybook/react';

// addons
import { withPerformance } from 'storybook-addon-performance';

// components
import { CreditCard } from './CreditCard';

// utils
import { creditCardState } from './CreditCard.utils';

// types
import { ECardState, ICreditCardProps } from './CreditCard.types';

///////////////
// HELPERS
///////////////

// generalize component
const Component = CreditCard;
type TComponent = typeof Component;

// generalize state
type TProps = ICreditCardProps;
const state: TProps = creditCardState;

// modify state
const setState = (props: Partial<TProps>): TProps => {
  return { ...state, ...props };
};

///////////////
// STORIES
///////////////

export default {
  title: `Components/${Component.name}`,
  component: Component,
  decorators: [withPerformance],
} as ComponentMeta<TComponent>;

// extract types for `args` autocompletion
const template: ComponentStory<TComponent> = (args) => <Component {...args} />;

////
// default
///

// figma: default - inactive
export const CardIdle = template.bind({});
CardIdle.args = setState({});

// figma: default - active
export const CardActive = template.bind({});
CardActive.args = setState({ state: ECardState.active });

// figma: default - expired
export const CardExpired = template.bind({});
CardExpired.args = setState({ state: ECardState.expired });

////
// hover
///

// figma: hover - inactive
export const CardHoverIdle = template.bind({});
CardHoverIdle.args = setState({});

// figma: hover - active
export const CardHoverActive = template.bind({});
CardHoverActive.args = setState({ state: ECardState.active });

// figma: hover - expired
export const CardHoverExpired = template.bind({});
CardHoverExpired.args = setState({ state: ECardState.expired });

////
// pressed
///

// figma: pressed - inactive
export const CardPressedIdle = template.bind({});
CardPressedIdle.args = setState({});

// figma: pressed - active
export const CardPressedActive = template.bind({});
CardPressedActive.args = setState({ state: ECardState.active });

// figma: pressed - expired
export const CardPressedExpired = template.bind({});
CardPressedExpired.args = setState({ state: ECardState.expired });
