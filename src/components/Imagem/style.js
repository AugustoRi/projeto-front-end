import styled from "styled-components";

export const ImageBg = styled.div`
  background-color: ${props => props.imgBgColor};
`;

export const Image = styled.img`
  display: ${props => props.imgDisplay};
  height: ${props => props.imgHeight};
  width: ${props => props.imgWidth};

  @media (max-width: 768px){
    display: ${props => props.imgDisplayMedia};
  }
`;