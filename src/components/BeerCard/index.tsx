import React from 'react';
import { Document } from 'prismic-javascript/types/documents';
import { Container } from './styles';
import PrismicDom from 'prismic-dom';

interface BeerProps {
  beer: Document;
}

const BeerCard: React.FC<BeerProps> = ({ beer }) => {
  return (
    <Container>
      {' '}
      <h1>{PrismicDom.RichText.asText(beer.data.name)}</h1>
    </Container>
  );
};

export default BeerCard;
