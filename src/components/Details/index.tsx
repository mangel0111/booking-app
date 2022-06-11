import { FC } from 'react';
import { IoLocationOutline, IoTrainOutline } from 'react-icons/io5';
import { TbStairs } from 'react-icons/tb';
import { Title } from 'src/components/Title';
import {
  DetailsContainer,
  DetailsLine,
  SpecificDetails,
} from './DetailsStyled';

const Details: FC = () => {
  return (
    <DetailsContainer>
      <Title>Monsieur Didot</Title>
      <DetailsLine>
        <span>4 people</span>
        <span>2 bedrooms</span>
        <span>Private terrasse</span>
        <span>Peaceful</span>
      </DetailsLine>
      <SpecificDetails>
        <span>
          <IoLocationOutline />
          Nothing Hill, London
        </span>
        <span>
          <IoTrainOutline />
          Walk 6 mins (Westbourne Park Station)
        </span>
        <span>
          <TbStairs /> Stairs
        </span>
      </SpecificDetails>
    </DetailsContainer>
  );
};

export default Details;
