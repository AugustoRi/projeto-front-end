//import { Link } from "react-router-dom";

import { HeaderWrap, Container, Menu, IconMenu, Logo, IconLogo } from "./style";


export function Header() {
  return(
    <HeaderWrap>
      <Container>
        <Menu>
          <IconMenu/>
        </Menu>
        
        <Logo>
          <a href='/'><IconLogo/></a>
          <h1>Cursos</h1>
        </Logo>
      </Container>
    </HeaderWrap>
  );
}