import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import App from './App';

it('renders learn react link', async () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  await act(() => {
    fetch.mockResponseOnce(JSON.stringify(
      [
        {
          _id: '121dsadsa',
          summary: 'summary',
          rating: 5.5,
          title: 'title',
          imageURL: 'test.jpg',
          accept: 'accept',
        },
      ],
    ));
    render(<App />);
  });
  expect(window.fetch).toHaveBeenCalledTimes(1);
  expect(screen.getByText('Movies are loading...')).toBeInTheDocument();
  // expect(screen.getByText("title")).toBeInTheDocument();
});
