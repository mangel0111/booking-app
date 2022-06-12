import { ChangeEventHandler, FC } from 'react';
import { InputContainer, InputField, InputLabel } from './InputStyled';

interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  id?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<IInputProps> = ({
  label,
  type,
  placeholder,
  defaultValue,
  value,
  id,
  onChange,
  readOnly,
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
        onChange={onChange}
        readOnly={readOnly}
      />
    </InputContainer>
  );
};

export default Input;
