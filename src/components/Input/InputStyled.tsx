import styled from 'styled-components';

export const InputContainer = styled.div``;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.fontAltColor};
  font-size: 12px;
  margin-bottom: 5px;
`;

export const InputField = styled.input`
  border: none;
  width: 100%;
  font-weight: 500;
  padding: 0;
  color: ${({ theme }) => theme.fontColor};

  ::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;
