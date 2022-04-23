//import { cursos } from "../../services/db/dados";
import { Cursos } from "../Cursos";
import { Main, Container, StatusCursos, CursosWrap } from "./style";
//

export function Listagem() {
  return (
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
    //console.log(cursos)
  );
}