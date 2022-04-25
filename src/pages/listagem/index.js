//import { cursos } from "../../services/db/dados";
import { Header } from "../../components/header";
import { Cursos } from "../../components/Cursos";
import { Main, Container, StatusCursos, CursosWrap } from "./style";

export function Listagem() {
  return (
    <>
    <Header titulo="Cursos" />
    <Main>
      <Container>
        <StatusCursos>
          <h1>Concluídos</h1>
          <h1>Próximos</h1>
        </StatusCursos>
        <CursosWrap>
          <Cursos />
        </CursosWrap>
      </Container>
    </Main>
    </>
      
    //console.log(cursos)
  );
}