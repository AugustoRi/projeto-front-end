import { cursos } from "../../services/db/dados.js";

import { Header } from "../../components/header";
import { Conteudo } from "../../components/Conteudo/index.js";
import { Imagem } from "../../components/Imagem/index.js";

import {  HeaderListagem, Sair, Container, CursoContent, Text, TempoCurso, Tempo, TextTempo, Icone } from "./style";

import { useParams, Link } from "react-router-dom";

export function InformacoesCursos() {

  const parametrosUrl = useParams();

  const pegarInformacoes = Object.values(cursos)[parametrosUrl.id - 1];

  return (    
    <>
    <HeaderListagem>
    <Header titulo="Informações do Curso"/>
      <Sair>
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
        </Link>
      </Sair>
    </HeaderListagem>
    <Container>
      <CursoContent>
        <Imagem 
          imgHeight={ pegarInformacoes.id < 3 ? "100px" : "100px" }
          imgWidth={ pegarInformacoes.id < 3 ? "150px" : "100px" }
          imgSrc={pegarInformacoes.img_icon}
          imgAlt={`Logo do curso de ${pegarInformacoes.nome}`}
          imgDisplay="flex"
          imgDisplayMedia="none"
          />
        <Text>
          <h1>{pegarInformacoes.nome}</h1>
          <span>Professor: {pegarInformacoes.professor}</span>
        </Text>
      </CursoContent>

      <TempoCurso>
        <Tempo>
          <Icone>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM192 304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304zM336 256C327.2 256 320 263.2 320 272V304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336zM64 432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80C71.16 384 64 391.2 64 400V432zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208zM320 432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336C327.2 384 320 391.2 320 400V432z"/></svg>
          </Icone>
          <TextTempo>
            <h1>Realizado em</h1>
            <span>{pegarInformacoes.dt_realizacao}</span>
          </TextTempo>
        </Tempo>
        <Tempo>
          <Icone>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"/></svg>
          </Icone>
          <TextTempo>
            <h1>Carga Horária</h1>
            <span>{pegarInformacoes.carga_horaria} horas</span>
          </TextTempo>
        </Tempo>
      </TempoCurso>

      <Conteudo id={parametrosUrl.id} />
    </Container>
    </>
  );
}