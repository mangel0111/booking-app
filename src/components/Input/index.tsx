import { FC } from 'react';
import { InputContainer, InputField, InputLabel } from './InputStyled';

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
