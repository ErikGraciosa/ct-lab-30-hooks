import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<Character />);
    expect(asFragment()).toMatchSnapshot();
  });
});
