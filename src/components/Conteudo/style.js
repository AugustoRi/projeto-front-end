import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 30px;
  width: 100%;

  & > span:not(:first-child){
    margin-top: 10px;
  }

  & > span:last-child{
    margin-bottom: 30px;
  }
`