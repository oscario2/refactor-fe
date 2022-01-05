import { render } from '@testing-library/react';
import { CreditCard, ECardState } from '../lib/cjs';

describe('CreditCard', () => {
  it('renders the componet', async () => {
    // arrange
    const kek = {
      name: 'Marty McFly',
      cardNumber: '**** 1177',
      expiryMonth: 8,
      expiryYear: 2023,
    };

    const { container } = render(
      <CreditCard {...kek} state={ECardState.idle} />,
    );
    expect(container).not.toBeUndefined();
  });
});
