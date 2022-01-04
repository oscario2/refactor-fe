import { render } from '@testing-library/react';
import { CreditCard } from '../lib/cjs';

describe('CreditCard', () => {
  it('renders the componet', async () => {
    // arrange
    const kek = {
      name: 'Marty McFly',
      cardNumber: '**** 1177',
      expiryMonth: 8,
      expiryYear: 2023,
    };

    const { container } = render(<CreditCard {...kek} state="inactive" />);
    expect(container).not.toBeUndefined();
  });
});
