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
    <CarrouselContainer>
      <CarrouselInner activeIndex={activeIndex}>
        {items.map(id => (
          <CarrouselItem key={id}>
            <img src={`${id}?w=925&ar=2:1`} />
          </CarrouselItem>
        ))}
      </CarrouselInner>
      <MoveButton
        direction="left"
        onClick={() => setActiveIndex(activeIndex - 1)}
        disabled={activeIndex <= 0}
      >
        <BsArrowLeft />
      </MoveButton>
      <MoveButton
        direction="right"
        onClick={() => setActiveIndex(activeIndex + 1)}
        disabled={activeIndex >= items.length - 1}
      >
        <BsArrowRight />
      </MoveButton>
      {items.length > 0 && (
        <CurrentPositionIndex>
          {activeIndex + 1}/{items.length}
        </CurrentPositionIndex>
      )}
    </CarrouselContainer>
  );
};

export default Carrousel;
