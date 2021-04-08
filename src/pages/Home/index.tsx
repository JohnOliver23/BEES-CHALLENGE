import React, { useEffect, useState, useCallback } from 'react';
import { getBeers } from '../../lib/prismic';
import { arrayMove } from 'react-sortable-hoc';
import { Document } from 'prismic-javascript/types/documents';
import { BeerList } from '../../components/BeerList';
import { Container, ContainerCenter, ContainerSelect } from './styles';
import { GrSort } from 'react-icons/gr';
import Select from '../../components/Select';
import { SortMethods } from '../../lib/util';

const Home: React.FC = () => {
  const [beers, setBeers] = useState<Document[]>([]);
  const [sortMethod, setSortMethod] = useState('Product Name');

  const mapAllMethods = useCallback(
    () =>
      SortMethods.map(value => (
        <option key={value} value={value}>
          {value}
        </option>
      )),
    [],
  );

  const onSortEnd = ({ oldIndex, newIndex }: any) => {
    setBeers(arrayMove(beers, oldIndex, newIndex));
  };

  useEffect(() => {
    getBeers().then(response => {
      //sortering by product name
      const sorteredBeers = response.results
        .sort((a: Document, b: Document) => {
          if (a.data.name[0].text < b.data.name[0].text) return -1;
          if (a.data.name[0].text > b.data.name[0].text) return 1;
          return 0;
        })
        .map((item: Document) => item);
      setBeers(sorteredBeers);
      console.log(response);
    });
  }, []);

  // order beers whem choose on select
  const handleChange = (value: string) => {
    setSortMethod(value);
    if (value === 'Lowest Price') {
      // order by lowest price
      const sorteredBeers = beers
        .sort((a, b) => a.data.price - b.data.price)
        .map(item => item);
      setBeers(sorteredBeers);
    } else if (value === 'Biggest Price') {
      //order by biggest price
      const sorteredBeers = beers
        .sort((a, b) => b.data.price - a.data.price)
        .map(item => item);
      setBeers(sorteredBeers);
    } else {
      // order by name
      const sorteredBeers = beers
        .sort((a, b) => {
          if (a.data.name[0].text < b.data.name[0].text) return -1;
          if (a.data.name[0].text > b.data.name[0].text) return 1;
          return 0;
        })
        .map(item => item);
      setBeers(sorteredBeers);
    }
  };

  return (
    <Container>
      <ContainerCenter>
        <ContainerSelect>
          <GrSort size={20} />
          <Select
            name="order"
            onChange={e => handleChange(e.target.value)}
            value={sortMethod}
            list={mapAllMethods()}
          />
        </ContainerSelect>
        <BeerList items={beers} onSortEnd={onSortEnd} axis={'xy'} />
      </ContainerCenter>
    </Container>
  );
};

export default Home;
