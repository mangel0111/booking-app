import { device } from 'src/utilities/theme';
import styled from 'styled-components';

export const DetailsContainer = styled.div`
  height: 100%;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.tertiaryColor} 0%,
    ${({ theme }) => theme.tertiaryColor} 80%,
    #fff 80%,
    #fff 100%
  );
  padding: 60px 20px;
  text-align: center;
  color: ${({ theme }) => theme.onTertiaryColor};
`;

export const DetailsLine = styled.div`
  margin: 5px auto 10px;

  span {
    margin: 5px 10px;
    font-size: 12px;
  }
`;

export const SpecificDetails = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.borderOnTertiaryColor};
  border-top: 1px solid ${({ theme }) => theme.borderOnTertiaryColor};
  width: max-content;
  margin: 0 auto 40px;

  span {
    font-size: 14px;
    padding: 6px 10px;
    &:not(:last-child) {
      border-right: 1px solid ${({ theme }) => theme.borderOnTertiaryColor};
    }

    svg {
      margin: 0 4px;
    }
  }

  @media ${device.mobile} {
    width: 100%;
  }
`;
