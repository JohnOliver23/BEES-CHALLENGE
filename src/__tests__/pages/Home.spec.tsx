import React from 'react';
import { render, wait, fireEvent } from '@testing-library/react';
import Home from '../../pages/Home';
import * as prismic from '../../lib/prismic';
import '@testing-library/jest-dom';
import { resultsMock } from '../../lib/util';
import * as functions from '../../lib/functions';

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: jest.fn(),
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Home Page', () => {
  it('should be able to render a list of beers in Home', async () => {
    const spy = jest.spyOn(prismic, 'getBeers');
    spy.mockReturnValue(Promise.resolve(resultsMock));
    const { queryByText } = render(<Home />);

    await wait(() => {
      expect(queryByText('Brahma light')).toBeInTheDocument();
    });
  });

  it('should be able to reorder a list when choose on select for lowest price', async () => {
    const spy = jest.spyOn(prismic, 'getBeers');
    spy.mockReturnValue(Promise.resolve(resultsMock));
    const spyGetSorteredBeers = jest.spyOn(functions, 'getSorteredBeers');

    const { getByTestId } = render(<Home />);
    const select = getByTestId('select');

    fireEvent.change(select, { target: { value: 'Lowest Price' } });

    await wait(() => {
      expect(spyGetSorteredBeers).toHaveBeenCalled();
    });
  });

  it('should be able to reorder a list when choose on select for biggest price', async () => {
    const spy = jest.spyOn(prismic, 'getBeers');
    spy.mockReturnValue(Promise.resolve(resultsMock));
    const spyGetSorteredBeers = jest.spyOn(functions, 'getSorteredBeers');

    const { getByTestId } = render(<Home />);
    const select = getByTestId('select');

    fireEvent.change(select, { target: { value: 'Biggest Price' } });

    await wait(() => {
      expect(spyGetSorteredBeers).toHaveBeenCalled();
    });
  });

  it('should be able to reorder a list when choose on select for Product Name', async () => {
    const spy = jest.spyOn(prismic, 'getBeers');
    spy.mockReturnValue(Promise.resolve(resultsMock));
    const spyGetSorteredBeers = jest.spyOn(functions, 'getSorteredBeers');

    const { getByTestId } = render(<Home />);
    const select = getByTestId('select');

    fireEvent.change(select, { target: { value: 'Product Name' } });

    await wait(() => {
      expect(spyGetSorteredBeers).toHaveBeenCalled();
    });
  });
});
