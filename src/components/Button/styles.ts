import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #fff;
  font-size: 14px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  padding: 0 16px;
  color: blue;
  width: 100%;
  font-weight: 700;
  margin-top: 1rem;
  transition: background-color 0.2s;
  border: 1px solid blue;
  text-transform: uppercase;
  &:hover {
    background: ${shade(0.2, '#fff')};
  }
  &[disabled] {
    cursor: not-allowed;
    background: #cdcdcd;
    color: #8e8787;
    border: none;
  }
`;
