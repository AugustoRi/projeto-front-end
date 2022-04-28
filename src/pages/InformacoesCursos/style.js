import styled from "styled-components";

export const HeaderListagem = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2D4277;
`;

export const Sair = styled.div`
  width: 20px;
  height: 20px;
  color: #fff;
  margin-right: 2%;
  cursor: pointer;
`;


export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 30px;
  padding-left: 20%;

  @media (max-width: 768px) {
    padding-left: 10%;
  }
`;

export const CursoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  width: 100%;
`;

export const Text = styled.div`
  & > h1 {
    font: 400 2em 'Poppins', sans-serif;
    color: #A9A9A9;
  }

  & > span {
    font: 200 1.2em 'Poppins', sans-serif;
    color: #A9A9A9;
  }
`;

export const TempoCurso = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 30px;
  width: 100%;
`;

export const Tempo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  width: 100%;

  & + &{
    margin-top: 30px;
  }
`;

export const TextTempo = styled(Text)`
  & > h1 {
    font-size: 1.6em !important;
  }

  & > span {
    font-size: 1em !important;
    color: #000;
  }
`;

export const Icone = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
`

