import React from 'react';
import { Container } from './styles';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import BeerCard from '../../components/BeerCard';
import { Document } from 'prismic-javascript/types/documents';

const BeerItem = SortableElement(({ value }: { value: Document }) => (
  <BeerCard key={value.uid} beer={value} />
));

export const BeerList = SortableContainer(
  ({ items }: { items: Document[] }) => {
    return (
      <Container>
        {items.map((value: Document, index) => (
          <BeerItem key={`item-${value.uid}`} index={index} value={value} />
        ))}
      </Container>
    );
  },
);
