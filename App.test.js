import React from 'react';
import HomeScreen from './app/components/HomeScreen';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<HomeScreen />).toJSON();
  expect(rendered).toBeTruthy();
});
