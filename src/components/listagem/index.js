//import { cursos } from "../../services/db/dados";
import { Main, Container, StatusCursos, Cursos } from "./style";

export function Listagem() {
  return (
    <Main>
      <Container>
        <StatusCursos>
          <h1>Concluídos</h1>
          <h1>Próximos</h1>
        </StatusCursos>
        <Cursos></Cursos>
      </Container>
    </Main>
    //console.log(cursos)
  );
}