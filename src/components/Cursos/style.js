import styled from "styled-components";
import imagemTeste from "../../assets/imgs/avatar-maven.png";

export const Container = styled.div`
  width: 100%;
  padding: 1em;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  cursor: pointer;
  
  &:hover{
    background-color: #ccc;
  }

  & > a{
    display: flex;
    gap: 15px;
    
    color: #000;
    text-decoration: none;
  }

  &:first-child{
    margin-top: 35px;
  }

  &:last-child{
    margin-bottom: 35px;
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

  & > div{
    background-image: url(${imagemTeste});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 60px;
    height: 40px;
  }

  background-color: #ccc;
`;

export const Informacoes = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;