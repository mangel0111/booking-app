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
  margin: ${({ theme }) =>
    `${theme.spacing.space6} ${theme.spacing.spaceAuto} ${theme.spacing.space10}`};

  span {
    margin: ${({ theme }) =>
      `${theme.spacing.space6} ${theme.spacing.space10}`};
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const SpecificDetails = styled.div`
  padding: ${({ theme }) => theme.spacing.space10};
  border-bottom: 1px solid ${({ theme }) => theme.borderOnTertiaryColor};
  border-top: 1px solid ${({ theme }) => theme.borderOnTertiaryColor};
  width: max-content;
  margin: ${({ theme }) =>
    `${theme.spacing.space0} ${theme.spacing.spaceAuto} ${theme.spacing.space40}`};
  span {
    font-size: ${({ theme }) => theme.fontSizes.small};
    padding: ${({ theme }) =>
      `${theme.spacing.space6} ${theme.spacing.space10}`};
    &:not(:last-child) {
      border-right: 1px solid ${({ theme }) => theme.borderOnTertiaryColor};
    }

    svg {
      margin: ${({ theme }) =>
        `${theme.spacing.space0} ${theme.spacing.space4}`};
    }
  }

  @media ${device.mobile} {
    width: auto;
    display: flex;

    span {
      width: 115px;

      svg {
        margin: 5px 50%;
      }
    }
  }
`;
