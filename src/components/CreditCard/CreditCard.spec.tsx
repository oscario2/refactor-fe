import 'jest-styled-components';
import { render, fireEvent } from '@testing-library/react';

// component
import { CreditCardExample } from './CreditCard.example';

// styles
import { CardStyled as styled } from './CreditCard.styles';

// types
import { ECardState, TCardState } from './CreditCard.types';

// utils
import { creditCardState } from './CreditCard.utils';

describe('CreditCard - actions', () => {
  it('should click', async () => {
    let component: HTMLElement;

    // assert
    let activeCalls = 0;
    const onActive = () => {
      activeCalls++;
    };

    let idleCalls = 0;
    const onIdle = () => {
      idleCalls++;
    };

    // arrange
    const onAction = (action: TCardState) => {
      switch (action) {
        case ECardState.active:
          return onActive();
        case ECardState.idle:
          return onIdle();
      }
    };
    const className = styled.Card.toString();
    const state = creditCardState;

    // act
    const { container } = render(
      <CreditCardExample onAction={onAction} {...state} />,
    );
    component = container.querySelector(className)!;
    expect(component).not.toBeUndefined();

    fireEvent.click(component);
    expect(activeCalls).toEqual(1);

    fireEvent.click(component);
    expect(idleCalls).toEqual(1);
  });
});
