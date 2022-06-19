import { device } from 'src/utilities/theme';
import styled from 'styled-components';

export const SearchbarContainer = styled.div`
  display: flex;
`;

export const SearchBarItems = styled.div`
  display: flex;
  margin: 20px auto;
  flex-wrap: wrap;
  justify-content: center;
`;

interface ISearchBarItem {
  shouldFillLine?: boolean;
}

export const SearchBarItem = styled.div<ISearchBarItem>`
  max-width: 220px;
  min-width: 180px;
  padding: ${({ theme }) =>
    `${theme.spacing.space10} ${theme.spacing.space16}`};

  ${({ shouldFillLine }) =>
    shouldFillLine &&
    `
    flex-grow: 4;
    justify-content: center;
    text-align: center;
`}

  &:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.borderLineColor};
  }

  @media ${device.mobile} {
    width: 100%;
    margin-bottom: 5px;
    max-width: 240px;
    min-width: 240px;
    margin: 20px 55px 0;

    button {
      width: 100%;
    }

    &:not(:last-child) {
      border-left: 1px solid ${({ theme }) => theme.borderLineColor};
    }
  }
`;
