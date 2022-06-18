import styled from 'styled-components';

export const InputContainer = styled.div``;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.fontAltColor};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-bottom: 5px;
`;

export const InputField = styled.input`
  border: none;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.fontColor};
  font-weight: 500;
  padding: 0;

  ::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;
