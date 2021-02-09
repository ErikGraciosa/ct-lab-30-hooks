import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Details from './Details';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<Details />);
    expect(asFragment()).toMatchSnapshot();
  });
});
