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
  flex-direction: column;
`;

export const ContainerSelect = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  & svg {
    margin-top: 5px;
    margin-right: 10px;
  }
  & div {
    width: 200px !important;
  }
`;
