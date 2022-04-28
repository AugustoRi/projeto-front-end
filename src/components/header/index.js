import { Imagem } from "../Imagem";

import { HeaderName } from "./HeaderName";
import { HeaderWrap, Container, Menu, Logo } from "./style";

import { Link } from "react-router-dom";

export function Header({titulo}) {
  return(
    <HeaderWrap>
      <Container>
        <Menu>
          <Imagem 
            imgHeight="40px"
            imgWidth="40px" 
            imgSrc="/assets/imgs/icon-menu.png"
            imgAlt="Ícone de menu" 
            imgBgColor="#2D4277"
            imgDisplay="none"
            imgDisplayMedia="flex"
          />
        </Menu> 
        
        <Logo>
          <Link to='/'>
            <Imagem 
              imgHeight="80px"
              imgWidth="80px" 
              imgSrc="/assets/imgs/logo.png"
              imgAlt="Ícone da logo da aplicação" 
              imgDisplay="flex"
              imgDisplayMedia="none"
            />
          </Link>
          <HeaderName title={titulo} />
        </Logo>
      </Container>
    </HeaderWrap>
  );
}