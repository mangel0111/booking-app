import { FC } from 'react';
import styled from 'styled-components';

const ButtonInput = styled.button`
  background: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.onSecondaryColor};
  border: none;
  font-size: 12px;
  padding: 12px 20px;
  cursor: pointer;
`;

export default ButtonInput;
