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
  padding: ${({ theme }) =>
    `${theme.spacing.space60} ${theme.spacing.space20}`};
  text-align: center;
  color: ${({ theme }) => theme.onTertiaryColor};
`;

export const DetailsLine = styled.div`
  margin: 5px auto 10px;

  span {
    margin: 5px 10px;
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const SpecificDetails = styled.div`
  padding: ${({ theme }) => theme.spacing.space10};
  border-bottom: 1px solid ${({ theme }) => theme.borderOnTertiaryColor};
  border-top: 1px solid ${({ theme }) => theme.borderOnTertiaryColor};
  width: max-content;
  margin: 0 auto 40px;

  span {
    font-size: ${({ theme }) => theme.fontSizes.small};
    padding: ${({ theme }) =>
      `${theme.spacing.space6} ${theme.spacing.space10}`};
    &:not(:last-child) {
      border-right: 1px solid ${({ theme }) => theme.borderOnTertiaryColor};
    }

    svg {
      margin: 0 4px;
    }
  }

  @media ${device.mobile} {
    width: auto;
    display: flex;

    span {
      svg {
        margin: 0 40%;
      }
    }
  }
`;
