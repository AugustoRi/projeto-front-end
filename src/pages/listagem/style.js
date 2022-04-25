import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 10px;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 980px;
`;

export const StatusCursos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  margin-top: 10px;
  width: 100%;
  border-bottom: 1px ridge #ccc;

  & > h1{
    padding: 0 5%;
    
    cursor: pointer;

    font: 400 2em 'Poppins', sans-serif;
    color: #3A71FC;
  }

  @media (max-width: 768px){
    width: 100%;

    & > h1{
      font-size: 1.5em !important;
    }
  }
`;

export const CursosWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
