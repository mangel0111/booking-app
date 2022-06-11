import styled from 'styled-components';

export const InputContainer = styled.div``;

export const InputLabel = styled.div`
  color: ${({ theme }) => theme.fontAltColor};
  font-size: 12px;
  margin-bottom: 5px;
`;

export const InputField = styled.input`
  border: none;
  font-weight: 500;
  color: ${({ theme }) => theme.fontColor};

  ::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;
