import styled from 'styled-components';

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.altFontFamily};
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  line-height: 56px;
  font-weight: 500;
  margin: 5px 0 25px;
`;
