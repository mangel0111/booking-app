import styled from 'styled-components';

export const InputContainer = styled.div`
  max-width: 180px;
`;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.fontAltColor};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-bottom: 5px;
  max-width: 180px;
`;

export const InputField = styled.input`
  border: none;
  width: 100%;
  max-width: 180px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.fontColor};
  font-weight: 500;
  padding: ${({ theme }) => theme.spacing.space0};

  ::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;
