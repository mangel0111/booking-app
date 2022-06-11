import { FC, useEffect, useState } from 'react';
import { IoLocationOutline, IoTrainOutline } from 'react-icons/io5';
import { TbStairs } from 'react-icons/tb';
import { Title } from 'src/components/Title';
import Carrousel from 'src/components/Carrousel';
import {
  DetailsContainer,
  DetailsLine,
  SpecificDetails,
} from './DetailsStyled';

interface DetailsProps {
  id: string;
  imageUrls: string[];
}

const Details: FC = () => {
  const [details, setDetails] = useState<DetailsProps>();

  useEffect(() => {
    const retrieveDetails = async () => {
      const response = await fetch(import.meta.env.VITE_DETAILS_SERVICE_URL);
      const detailsData: DetailsProps = await response.json();
      setDetails(detailsData);
    };
    retrieveDetails().catch(error =>
      console.error('Error retrieving data', error)
    );
  }, []);

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
      <Carrousel items={details?.imageUrls} />
    </DetailsContainer>
  );
};

export default Details;
