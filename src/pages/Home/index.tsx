import React, { useEffect, useState } from 'react';
import { client } from '../../lib/prismic';
import Prismic from 'prismic-javascript';
import {
  arrayMove,
  SortableContainer,
  SortableElement,
} from 'react-sortable-hoc';
import BeerCard from '../../components/BeerCard';
import { Container, ContainerCenter } from './styles';
import { Document } from 'prismic-javascript/types/documents';

const SortableItem = SortableElement(({ value }: { value: Document }) => (
  <BeerCard key={value.uid} beer={value} />
));

const SortableList = SortableContainer(({ items }: { items: Document[] }) => {
  return (
    <Container>
      <ContainerCenter>
        {items.map((value: Document, index) => (
          <SortableItem key={`item-${value.uid}`} index={index} value={value} />
        ))}
      </ContainerCenter>
    </Container>
  );
});

const Home: React.FC = () => {
  const [beers, setBeers] = useState<Document[]>([]);

  const onSortEnd = ({ oldIndex, newIndex }: any) => {
    setBeers(arrayMove(beers, oldIndex, newIndex));
  };

  useEffect(() => {
    (async () => {
      const data = await client().query([
        Prismic.Predicates.at('document.type', 'beers'),
      ]);
      setBeers(data.results);
    })();
  }, []);
  useEffect(() => {
    console.log(beers);
  }, [beers]);
  return <SortableList items={beers} onSortEnd={onSortEnd} axis={'xy'} />;
};

export default Home;
