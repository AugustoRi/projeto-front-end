import styled from "styled-components";

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 10px;

  background-color: green;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 980px;
`;

const StatusCursos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  width: 90%;
`;

const CursosWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export { Main, Container, StatusCursos, CursosWrap };