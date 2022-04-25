import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 30px;

  & > span:not(:first-child){
    margin-top: 10px;
  }
`