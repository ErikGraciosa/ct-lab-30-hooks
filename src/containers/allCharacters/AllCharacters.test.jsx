import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import AllCharacters from './AllCharacters';
import characterApiResponse from '../../fixtures/characterApiResponse.json';

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json(characterApiResponse));
  })
);

describe('Testing AllCharacters container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('returns a list of all characters', async() => {
    render(
      <MemoryRouter>
        <AllCharacters />
      </MemoryRouter>
    );

    screen.getByText('Rick and Morty quotes loading');

    return waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).not.toBeEmptyDOMElement();
    });
  });
});
