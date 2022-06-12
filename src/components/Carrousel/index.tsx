import { FC, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import {
  CarrouselContainer,
  CarrouselInner,
  CarrouselItem,
  CurrentPositionIndex,
  MoveButton,
} from './CarrouselStyled';

interface ICarrouselProps {
  items?: string[];
}

const Carrousel: FC<ICarrouselProps> = ({ items = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <CarrouselContainer data-testid="carrousel-container">
      <CarrouselInner activeIndex={activeIndex}>
        {items.map((url, index) => (
          <CarrouselItem
            key={`carrousel-key-${index}`}
            data-testid={`carrousel-item-${index}`}
          >
            <img src={`${url}?w=925&ar=2:1`} />
          </CarrouselItem>
        ))}
      </CarrouselInner>
      <MoveButton
        data-testid="carrousel-button-left"
        direction="left"
        onClick={() => setActiveIndex(activeIndex - 1)}
        disabled={activeIndex <= 0}
      >
        <BsArrowLeft />
      </MoveButton>
      <MoveButton
        data-testid="carrousel-button-right"
        direction="right"
        onClick={() => setActiveIndex(activeIndex + 1)}
        disabled={activeIndex >= items.length - 1}
      >
        <BsArrowRight />
      </MoveButton>
      {items.length > 0 && (
        <CurrentPositionIndex data-testid="carrousel-position-info">
          {activeIndex + 1}/{items.length}
        </CurrentPositionIndex>
      )}
    </CarrouselContainer>
  );
};

export default Carrousel;
