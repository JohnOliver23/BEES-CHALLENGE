import { Document } from 'prismic-javascript/types/documents';

export const getSorteredBeers = (beers: Document[], value: string) => {
  if (value === 'Lowest Price') {
    // order by lowest price
    const sorteredBeers = beers
      .sort((a, b) => a.data.price - b.data.price)
      .map(item => item);
    return sorteredBeers;
  } else if (value === 'Biggest Price') {
    //order by biggest price
    const sorteredBeers = beers
      .sort((a, b) => b.data.price - a.data.price)
      .map(item => item);
    return sorteredBeers;
  } else {
    // order by name
    const sorteredBeers = beers
      .sort((a, b) => {
        if (a.data.name[0].text < b.data.name[0].text) return -1;
        if (a.data.name[0].text > b.data.name[0].text) return 1;
        return 0;
      })
      .map(item => item);
    return sorteredBeers;
  }
};

export const handleIncrement = (value: number) => {
  return value + 1;
};

export const handleDecrement = (value: number) => {
  return value - 1;
};
