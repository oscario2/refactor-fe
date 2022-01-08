/**
 * we want to test the `themes` to ensure our logic and what we provide matches what we rendered
 * as testing the `styled.div` directly will always yield true as we compare the rendered style
 */

import { composeStories } from '@storybook/testing-react';
import { runStylesTests, ITestStyleSuite } from 'src/tests/styles.test';

// stories
import * as stories from './Button.stories';
const { ButtonSmallNormal, ButtonMediumBold, ButtonLargeBoldWhite } =
  composeStories(stories);

// styled
import { Styled } from './Button.styles';

// themes
import { fontSizeStyles, fontWeightStyles, colorStyles } from './styles';

const suite: ITestStyleSuite[] = [
  {
    name: '`small` button with `normal` font-weight',
    story: <ButtonSmallNormal />,
    styled: Styled.Button,
    themes: [fontSizeStyles.small, fontWeightStyles.normal],
  },
  {
    name: '`medium` button with `bold` font-weight',
    story: <ButtonMediumBold />,
    styled: Styled.Button,
    themes: [fontSizeStyles.medium, fontWeightStyles.bold],
  },
  {
    name: '`large` button with `bold` font-weight and `black` color theme',
    story: <ButtonLargeBoldWhite />,
    styled: Styled.Button,
    themes: [fontSizeStyles.large, fontWeightStyles.bold, colorStyles.white],
    verbose: true,
  },
];

suite.forEach((s) => {
  runStylesTests(s);
});
