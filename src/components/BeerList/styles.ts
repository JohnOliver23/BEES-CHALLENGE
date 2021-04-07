import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  @media all and (max-width: 769px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
