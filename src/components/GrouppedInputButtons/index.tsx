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
    console.log(value);
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };
  const isDisabled = value <= 0;

  return (
    <Container>
      <ButtonGroup>
        <Button disabled={isDisabled} isMinus onClick={handleDecrement}>
          -
        </Button>
        <input
          type="number"
          onChange={e => {
            setValue(parseInt(e.target.value));
          }}
          value={value}
        ></input>
        <Button onClick={handleIncrement}>+</Button>
      </ButtonGroup>
    </Container>
  );
};
export default GroupedInputButtons;
