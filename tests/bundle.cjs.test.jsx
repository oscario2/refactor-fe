const { render } =  require('@testing-library/react');
const { CreditCard } = require('../lib/cjs');

describe('CreditCard', () => {
  it('renders the componet', async () => {
    // arrange
    const state = {
      name: 'John Doe',
      cardNumber: 1234,
      expiryDate: Date.now() + 3600,
    };

    const { container } = render(<CreditCard {...state} />);
    expect(container).not.toBeUndefined();
  });
});
