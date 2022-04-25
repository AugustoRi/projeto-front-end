import { Container, Image, Informacoes } from './style';

import { cursos } from '../../services/db/dados';
import { Link } from 'react-router-dom';

export function Cursos() {
  return(
    cursos.map(curso => (
      <Container key={curso.id}>
        <Link to={`/${curso.nome}/${curso.id}`}>
          <Image>
            <div></div>
          </Image>
          <Informacoes>
            <h2>{curso.nome}</h2>
            <span>Realizado em: {curso.dt_realizacao}</span>
          </Informacoes>
        </Link>
      </Container>
    ))
  );
}