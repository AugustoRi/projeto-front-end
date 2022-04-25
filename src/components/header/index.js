import { Link } from "react-router-dom";

import { HeaderName } from "./HeaderName";
import { HeaderWrap, Container, Menu, IconMenu, Logo, IconLogo } from "./style";

export function Header({titulo}) {

  return(
    <HeaderWrap>
      <Container>
        <Menu>
          <IconMenu/>
        </Menu>
        
        <Logo>
          <Link to='/'><IconLogo/></Link>
          <HeaderName title={titulo} />
        </Logo>
      </Container>
    </HeaderWrap>
  );
}