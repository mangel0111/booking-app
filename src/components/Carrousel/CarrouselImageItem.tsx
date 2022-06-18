import { FC, useMemo } from 'react';
import { CarrouselImage, CarrouselItem } from './CarrouselStyled';

interface ICarrouselImageProps {
  index: number;
  url: string;
}

const CarrouselImageItem: FC<ICarrouselImageProps> = ({ index, url }) => {
  const responsiveUrlImages: string = useMemo(
    () =>
      [
        `${url}?q=50&w=400 1x`,
        `${url}?q=75&w=800 2x`,
        `${url}?q=100&w=1200 3x`,
      ].join(','),
    [url]
  );
  return (
    <CarrouselItem data-testid={`carrousel-item-${index}`}>
      <CarrouselImage
        srcSet={responsiveUrlImages}
        alt={`imagen displayed Nº ${index}`}
      />
    </CarrouselItem>
  );
};

export default CarrouselImageItem;
