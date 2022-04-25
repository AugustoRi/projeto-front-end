import { Container, Image, Informacoes } from './style';

import { cursos } from '../../services/db/dados';
import imagem from "../../assets/imgs/avatar-maven.png";
import { Link } from 'react-router-dom';
//require(value.img_icon)

//?name=Jonathan&age=18
export function Cursos() {
  return(
    cursos.map(curso => (
      <Container key={curso.id}>
        <Link to={`/${curso.nome}/${curso.id}`}>
          <Image>
            <div></div>
            <img src={imagem} alt={`avatar do curso ${curso.nome}`} />
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