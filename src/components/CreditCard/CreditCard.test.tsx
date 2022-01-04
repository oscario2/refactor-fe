import 'jest-styled-components';
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

// styles
import { CardStyled as styled } from './CreditCard.styles';
import { cardStyles, expiryStyles, radioStyles } from './styles';

// types
import { cardState, TCardState } from './CreditCard.types';
import { ITestSuite } from 'src/types/types.test';

// utils
import { getStyledRule } from 'src/utils/utils.test';

// stories
import * as stories from './CreditCard.stories';
const { CardInactive, CardActive, CardExpired } = composeStories(stories);

const suite: ITestSuite<TCardState>[] = [
  {
    type: 'card',
    find: styled.Card.toString(),
    styles: cardStyles,
    rules: ['border'],
  },
  {
    type: 'expiry',
    find: styled.Info.Expiry.toString(),
    styles: expiryStyles,
    rules: ['color'],
  },
  {
    type: 'radio',
    find: styled.Radio.toString(),
    styles: radioStyles,
    rules: ['boxShadow'],
  },
];

const getStory = (key: TCardState) => {
  switch (key) {
    case 'inactive':
      return <CardInactive />;
    case 'active':
      return <CardActive />;
    case 'expired':
      return <CardExpired />;
  }
};

const runTest = (key: TCardState) => {
  describe(`CreditCard - ${key}`, () => {
    let container: HTMLElement;

    beforeEach(() => {
      // arrange
      const story = getStory(key);
      ({ container } = render(story));
    });

    // filter
    const only = suite.filter((k) => k.only);
    const exclude = suite.filter((k) => !k.exclude);
    const tests = only.length > 0 ? only : exclude;

    // tests
    for (const { type, find, styles, rules } of tests) {
      it(`renders ${type}`, () => {
        // act
        const child = container.querySelector(find) as HTMLElement;
        const match = getStyledRule(styles[key], rules);

        // assert
        expect(match.length > 0).toBeTruthy();
        match.forEach((rule) => {
          expect(rule).not.toBeUndefined();
          expect(rule.length > 0).toBeTruthy();
          expect(child).toHaveStyleRule(rule);
        });
      });
    }
  });
};

cardState.forEach((state) => {
  runTest(state);
});
