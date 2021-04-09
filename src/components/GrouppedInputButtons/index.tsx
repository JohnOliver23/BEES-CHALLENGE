import React from 'react';
import { Container, ButtonGroup, Button } from './styles';
interface GroupedInputButtonsProps {
  value: number;
  setValue(value: number): void;
}
const GroupedInputButtons: React.FC<GroupedInputButtonsProps> = ({
  value,
  setValue,
}) => {
  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };
  const isDisabled = value <= 0;

  return (
    <Container>
      <ButtonGroup>
        <Button
          data-testid="button-minus"
          disabled={isDisabled}
          isMinus
          onClick={handleDecrement}
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
        <Button data-testid="button-plus" onClick={handleIncrement}>
          +
        </Button>
      </ButtonGroup>
    </Container>
  );
};
export default GroupedInputButtons;
