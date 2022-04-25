import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
  
  & > a{
    display: flex;
    gap: 15px;
    
    color: #000;
    text-decoration: none;
  }

  &:first-child{
    margin-top: 35px;
  }

  & + &{
    margin-top: 35px;
  }
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 70px;
  height: 70px;

  & > img{
    width: 60px;
    height: 60px;
  }

  background-color: #ccc;
`;

export const Informacoes = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;