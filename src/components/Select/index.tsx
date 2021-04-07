import React, { InputHTMLAttributes, useRef } from 'react';
import { Container } from './styles';
interface InputProps extends InputHTMLAttributes<HTMLSelectElement> {
  error?: string;
  list: any;
  label?: string;
  disabled?: boolean;
  defaultOption?: string;
}

const Select: React.FC<InputProps> = ({
  error,
  label,
  disabled,
  list,
  defaultOption,
  ...rest
}: InputProps) => {
  const inputRef = useRef<HTMLSelectElement>(null);

  return (
    <Container error={!!error} disabled={disabled}>
      <select ref={inputRef} {...rest}>
        {list}{' '}
      </select>
    </Container>
  );
};

export default Select;
