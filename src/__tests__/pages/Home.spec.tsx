import React from 'react';
import { render, wait, fireEvent } from '@testing-library/react';
import Home from '../../pages/Home';
import * as prismic from '../../lib/prismic';
import '@testing-library/jest-dom';
import { results } from '../../lib/util';

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: jest.fn(),
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('SignIn Page', () => {
  it('should be able to render a list of beers in Home', async () => {
    const spy = jest.spyOn(prismic, 'getBeers');
    spy.mockReturnValue(Promise.resolve(results));
    const { queryByText } = render(<Home />);

    await wait(() => {
      expect(queryByText('Brahma light')).toBeInTheDocument();
    });
  });

  it('should be able to reorder a list when choose on select for lowest price', async () => {
    const spy = jest.spyOn(prismic, 'getBeers');
    spy.mockReturnValue(Promise.resolve(results));
    const { getByTestId, queryByText } = render(<Home />);
    const select = getByTestId('select');

    fireEvent.change(select, { target: { value: 'Lowest Price' } });

    await wait(() => {
      expect(queryByText('Lowest Price')).toBeInTheDocument();
    });
  });

  it('should be able to reorder a list when choose on select for biggest price', async () => {
    const spy = jest.spyOn(prismic, 'getBeers');
    spy.mockReturnValue(Promise.resolve(results));
    const { getByTestId, queryByText } = render(<Home />);
    const select = getByTestId('select');

    fireEvent.change(select, { target: { value: 'Biggest Price' } });

    await wait(() => {
      expect(queryByText('Biggest Price')).toBeInTheDocument();
    });
  });

  it('should be able to reorder a list when choose on select for Product Name', async () => {
    const spy = jest.spyOn(prismic, 'getBeers');
    spy.mockReturnValue(Promise.resolve(results));
    const { getByTestId, queryByText } = render(<Home />);
    const select = getByTestId('select');

    fireEvent.change(select, { target: { value: 'Product Name' } });

    await wait(() => {
      expect(queryByText('Product Name')).toBeInTheDocument();
    });
  });
});
