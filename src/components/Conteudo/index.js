import { cursos } from "../../services/db/dados.js";

import { Container } from "./style.js";

export function Conteudo({ id }) {
  return (
    <Container>
      <h1>Conteúdo</h1>
      {
        Object.values(cursos)[id - 1].conteudo.map(conteudo => (
          <span>{conteudo}</span>
        ))
      }
    </Container>
  );
}