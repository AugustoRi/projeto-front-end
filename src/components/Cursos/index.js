// import imagemTeste from "../../assets/imgs/avatar-maven.png";
import { Imagem } from "../Imagem";

import { Container, Informacoes } from './style';

import { cursos } from '../../services/db/dados';

import { Link } from 'react-router-dom';

export function Cursos() { 
  return(
    cursos.map(curso => (
      <Container key={curso.id}>
        <Link to={`/${curso.nome}/${curso.id}`}>
          <Imagem 
            imgHeight={ curso.id < 3 ? "70px" : "70px" }
            imgWidth={ curso.id < 3 ? "90px" : "70px" }
            imgSrc={curso.img_icon}
            imgAlt={`Logo do curso de ${curso.nome}`} 
            imgBgColor="#000"
          />
          <Informacoes>
            <h2>{curso.nome}</h2>
            <span>Realizado em: {curso.dt_realizacao}</span>
          </Informacoes>
        </Link>
      </Container>
    ))
  );
}