import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  cursor: pointer;
  width: 300px;
  height: 400px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 1px 1px;
  margin-right: 15px;
  margin-bottom: 15px;
  padding: 15px;
  h1 {
    font-size: 16px;
  }
  h2 {
    font-size: 14px;
    font-weight: 400;
    color: #8e8b8b;
    margin-top: 2px;
    & svg {
      margin-left: 5px;
    }
  }
  h3 {
    font-size: 14px;
    font-weight: 500;
    color: #333;
    margin-top: 5px;
  }
  h4 {
    font-size: 13px;
    font-weight: 500;
    color: #5aad45;
    margin-top: 1rem;
    text-transform: capitalize;
  }
  img {
    width: 50px;
    height: 100px;
  }
  a {
    color: blue;
    font-size: 13px;
    font-family: Roboto;
    font-weight: 700;
  }
`;
export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  img {
    width: 80px;
    height: 120px;
  }
`;

export const Footer = styled.div``;
