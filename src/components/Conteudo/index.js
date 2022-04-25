import { cursos } from "../../services/db/dados.js";

import { Container } from "./style.js";

export function Conteudo({ id }) {
  let keyPass = 0;
  return (
    <Container>
      <h1>Conteúdo</h1>
      {
        Object.values(cursos)[id - 1].conteudo.map(conteudo => (
          <span key={keyPass++}>{conteudo}</span>
        ))
      }
    </Container>
  );
}