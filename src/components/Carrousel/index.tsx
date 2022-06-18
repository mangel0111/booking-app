import { FC, useCallback, useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useSwipeable } from 'react-swipeable';
import CarrouselImageItem from './CarrouselImageItem';
import {
  CarrouselContainer,
  CarrouselInner,
  CurrentPositionIndex,
  MoveButton,
} from './CarrouselStyled';

interface ICarrouselProps {
  items?: string[];
}

const Carrousel: FC<ICarrouselProps> = ({ items = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const moveLeft = useCallback(
    () => activeIndex > 0 && setActiveIndex(activeIndex - 1),
    [activeIndex]
  );
  const moveRight = useCallback(
    () => activeIndex < items.length - 1 && setActiveIndex(activeIndex + 1),
    [activeIndex, items]
  );
  const handlers = useSwipeable({
    onSwipedLeft: moveRight,
    onSwipedRight: moveLeft,
  });
  return (
    <CarrouselContainer data-testid="carrousel-container" {...handlers}>
      <CarrouselInner activeIndex={activeIndex}>
        {items.map((url, index) => (
          <CarrouselImageItem
            key={`carrousel-key-${index}`}
            index={index}
            data-testid={`carrousel-item-${index}`}
            url={url}
          />
        ))}
      </CarrouselInner>
      <MoveButton
        data-testid="carrousel-button-left"
        direction="left"
        onClick={moveLeft}
        disabled={activeIndex <= 0}
        aria-label="move-to-the-left"
      >
        <BsArrowLeft />
      </MoveButton>
      <MoveButton
        data-testid="carrousel-button-right"
        direction="right"
        onClick={moveRight}
        disabled={activeIndex >= items.length - 1}
        aria-label="move-to-the-right"
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
