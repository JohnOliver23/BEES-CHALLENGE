import React from 'react';
import { Container, ButtonGroup, Button } from './styles';
import { handleDecrement, handleIncrement } from '../../lib/functions';
interface GroupedInputButtonsProps {
  value: number;
  setValue(value: number): void;
}
const GroupedInputButtons: React.FC<GroupedInputButtonsProps> = ({
  value,
  setValue,
}) => {
  const isDisabled = value <= 0;

  return (
    <Container>
      <ButtonGroup>
        <Button
          data-testid="button-minus"
          disabled={isDisabled}
          isMinus
          onClick={() => setValue(handleDecrement(value))}
        >
          -
        </Button>
        <input
          type="number"
          data-testid="input"
          onChange={e => {
            setValue(parseInt(e.target.value));
          }}
          value={value}
        ></input>
        <Button
          data-testid="button-plus"
          onClick={() => setValue(handleIncrement(value))}
        >
          +
        </Button>
      </ButtonGroup>
    </Container>
  );
};
export default GroupedInputButtons;
