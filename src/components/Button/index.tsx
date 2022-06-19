import { FC } from 'react';
import styled from 'styled-components';

const ButtonInput = styled.button`
  background: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.onSecondaryColor};
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.small};
  padding: ${({ theme }) =>
    `${theme.spacing.space12} ${theme.spacing.space20}`};
  cursor: pointer;
`;

export default ButtonInput;
