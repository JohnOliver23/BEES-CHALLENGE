import React, { useState } from 'react';
import { Document } from 'prismic-javascript/types/documents';
import { Container, ContainerImg, Footer, ContainerDrag } from './styles';
import PrismicDom from 'prismic-dom';
import { FaRecycle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import GrouppedInputButtons from '../GrouppedInputButtons';
import Button from '../Button';
import { GrDrag } from 'react-icons/gr';

interface BeerProps {
  beer: Document;
}

const BeerCard: React.FC<BeerProps> = ({ beer }) => {
  const [value, setValue] = useState<number>(0);
  return (
    <Container>
      <ContainerDrag>
        <GrDrag size={20} color="#cdcdcd" />
      </ContainerDrag>

      <div>
        <ContainerImg>
          <img src={beer.data.image.url} alt={beer.data.image.alt} />
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
        <GrouppedInputButtons value={value} setValue={setValue} />
        <Button className="button-add" disabled={value === 0 ? true : false}>
          Add
        </Button>
      </Footer>
    </Container>
  );
};

export default BeerCard;
