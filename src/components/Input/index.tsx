import { FC } from 'react';
import { InputContainer, InputField, InputLabel } from './InputStyled';

interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  id?: string;
}

const Input: FC<IInputProps> = ({
  label,
  type,
  placeholder,
  defaultValue,
  value,
  id,
}) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputField
        data-testid={`input${id ? `-${id}` : ''}`}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
      />
    </InputContainer>
  );
};

export default Input;
