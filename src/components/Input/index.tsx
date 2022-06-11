import { FC } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div``;

const InputLabel = styled.div`
  color: ${({ theme }) => theme.fontAltColor};
  font-size: 12px;
  margin-bottom: 5px;
`;

const InputField = styled.input`
  border: none;
  font-weight: 500;
  color: ${({ theme }) => theme.fontColor};

  ::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;

interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
}

const Input: FC<IInputProps> = ({
  label,
  type,
  placeholder,
  defaultValue,
  value,
}) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputField
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
      />
    </InputContainer>
  );
};

export default Input;
