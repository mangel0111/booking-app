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
import { getEnvironmentVariable } from 'src/utilities/environment';
import { ConfigKeys } from 'src/models';

interface DetailsProps {
  id: string;
  imageUrls: string[];
}

const Details: FC = () => {
  const [details, setDetails] = useState<DetailsProps>();

  useEffect(() => {
    const retrieveDetails = async () => {
      const response = await fetch(
        getEnvironmentVariable(ConfigKeys.SERVICE_URL)
      );
      const detailsData: DetailsProps = await response.json();
      setDetails({
        id: detailsData.id,
        imageUrls: detailsData.imageUrls.slice(0, 30),
      });
    };
    retrieveDetails().catch(error =>
      console.error('Error retrieving data', error)
    );
  }, []);

  return (
    <DetailsContainer data-testid="details-container">
      <Title>Monsieur Didot</Title>
      <DetailsLine data-testid="basic-details-info">
        <span>4 people</span>
        <span>2 bedrooms</span>
        <span>Private terrasse</span>
        <span>Peaceful</span>
      </DetailsLine>
      <SpecificDetails data-testid="specific-details-info">
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
