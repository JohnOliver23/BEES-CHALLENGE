import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 6rem;
  justify-content: center;
  align-items: center;
`;
export const ContainerCenter = styled.div`
  width: 80%;
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
