import { Container, Image, Informacoes } from './style';

import { cursos } from '../../services/db/dados';
import imagem from "../../assets/imgs/avatar-maven.png";
//require(value.img_icon)

export function Cursos() {
  return(
    cursos.map(value => (
      <Container key={value.id}>
        <Image>
          <div></div>
          <img src={imagem} alt={`avatar do curso ${value.nome}`} />
        </Image>
        <Informacoes>
          <h2>{value.nome}</h2>
          <span>Realizado em: {value.dt_realizacao}</span>
        </Informacoes>
      </Container>
    ))
  );
}