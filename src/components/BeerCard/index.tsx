import React from 'react';
import { Document } from 'prismic-javascript/types/documents';
import { Container, ContainerImg, Footer } from './styles';
import PrismicDom from 'prismic-dom';
import { FaRecycle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface BeerProps {
  beer: Document;
}

const BeerCard: React.FC<BeerProps> = ({ beer }) => {
  return (
    <Container>
      <div>
        <ContainerImg>
          <img src={beer.data.image.url} />
        </ContainerImg>
        <h1>{PrismicDom.RichText.asText(beer.data.name)}</h1>
        <h2>
          {beer.data.quantity} Unit • {beer.data.ml}{' '}
          {PrismicDom.RichText.asText(beer.data.description)}
          {beer.data.recyclable && <FaRecycle size={10} color="blue" />}
        </h2>
        <h3>RD${beer.data.price}.00/Unit</h3>
        <h4>{PrismicDom.RichText.asText(beer.data.promotiondescription)}</h4>
        <Link to="">View Details</Link>
      </div>
      <Footer>
        <p>footer</p>
      </Footer>
    </Container>
  );
};

export default BeerCard;
