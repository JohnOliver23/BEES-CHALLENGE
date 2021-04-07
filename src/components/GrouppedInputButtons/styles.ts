import styled, { css } from 'styled-components';

interface ButtonProps {
  isMinus?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  & input {
    border: 1px solid #e3e3e3;
    background: transparent;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    text-align: center;
    width: 50px;
    height: 35px;
    margin-right: 5px;
    margin-left: 5px;
    border-radius: 4px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type='number'] {
    -moz-appearance: textfield; /* Firefox */
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  border-radius: 6px;
  height: 40px;
`;

export const Button = styled.button<ButtonProps>`
  color: blue;
  background: #fff;
  height: 30px;
  border: 1px solid blue;
  cursor: pointer;
  padding: 0px 10px;
  border-radius: 999px;
  display: inline-block;
  position: relative;
  ${props =>
    props.isMinus &&
    css`
      padding: 0px 12px;
    `}
  &[disabled] {
    border: 1px solid #8e8787;
    color: #8e8787;
    cursor: not-allowed;
  }
`;
