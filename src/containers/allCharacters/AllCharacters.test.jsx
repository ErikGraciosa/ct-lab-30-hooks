import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import user from '@testing-library/user-event';
import AllCharacters from './AllCharacters';

describe('Testing AllCharacters container', () => {
  it('returns a list of all characters', async() => {
    render(<AllCharacters />);

    screen.getByText('Rick and Morty quotes loading');

    return waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).not.toBeEmptyDOMElement();
    });
  });
});
