import styled from 'styled-components';

interface ContainerProps {
  error: boolean;
  disabled?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  border: 0.900966px solid #e8e8e8;
  border-radius: 25px;
  height: 30px;
  select {
    background: transparent;
    border: transparent;
    width: 100%;
    padding-left: 10px;
    margin-right: 10px;
    color: #808080;
  }
`;
