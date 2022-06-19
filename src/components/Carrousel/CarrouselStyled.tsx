import { device, ScreenSize } from 'src/utilities/theme';
import styled from 'styled-components';

export const CarrouselContainer = styled.div`
  overflow: hidden;
  position: relative;

  max-width: ${ScreenSize.desktop};
  margin: 0 auto;
`;

interface ICarrouselInnerProps {
  activeIndex: number;
}

export const CarrouselInner = styled.div<ICarrouselInnerProps>`
  white-space: nowrap;
  transition: transform 0.5s;
  transform: translateX(-${({ activeIndex }) => activeIndex * 100}%);
`;

export const CarrouselItem = styled.picture`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CarrouselImage = styled.img`
  height: 500px;
  width: 100%;
  object-fit: cover;
`;

interface IMoveButton {
  direction: 'right' | 'left';
}

export const MoveButton = styled.button<IMoveButton>`
  background: transparent;
  border: none;
  position: absolute;
  color: ${({ theme }) => theme.onTertiaryColor};
  top: 50%;
  cursor: pointer;

  ${({ direction }) => (direction === 'right' ? `right: 0` : `left: 0`)};

  svg {
    width: 20px;
  }
`;

export const CurrentPositionIndex = styled.div`
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  width: 2.8em;
  height: 2.8em;
  line-height: 2.6em;
  position: absolute;
  top: 48%;
  right: 30px;
  background: white;
  font-size: ${({ theme }) => theme.fontSizes.small};
  padding: 4px;
`;
