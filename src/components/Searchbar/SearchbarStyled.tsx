import styled from 'styled-components';

export const SearchbarContainer = styled.div`
  display: flex;
`;

export const SearchBarItems = styled.div`
  display: flex;
  margin: 20px auto;
  flex-wrap: wrap;

  > div:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.borderLineColor};
  }
`;

interface ISearchBarItem {
  shouldFillLine?: boolean;
}

export const SearchBarItem = styled.div<ISearchBarItem>`
  max-width: 250px;
  min-width: 180px;
  padding: 10px 20px;

  ${({ shouldFillLine }) =>
    shouldFillLine &&
    `
    flex-grow: 4;
    justify-content: center;
    text-align: center;
`}
`;
