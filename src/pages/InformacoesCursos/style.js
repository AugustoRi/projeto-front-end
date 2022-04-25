import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 30px;
`;

export const CursoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 100%;
`;

export const Image = styled.div`
  background-image: url(${props => props.image});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  width: 150px;
  height: 140px;
`;

export const Text = styled.div`
  & > h1 {
    font: 400 3em 'Poppins', sans-serif;
    color: #ccc;
  }

  & > span {
    font: 200 1.5 em 'Poppins', sans-serif;
    color: #ccc;
  }
`;

export const TempoCurso = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */

  margin-top: 30px;
  width: 100%;
`;

export const Tempo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

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

