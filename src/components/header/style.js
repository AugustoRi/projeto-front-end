import styled from 'styled-components';
import ImgMenu from '../../assets/imgs/icon-menu.png';
import ImgLogo from '../../assets/imgs/logo.png';

const HeaderWrap = styled.header`
  background-color: #2D4277;
`;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;

  max-width: 1280px;

  padding: 1% 2%;
`;

const Menu = styled.div`
  color: #000;
`;

const IconMenu = styled.div`
  background-image: url(${ImgMenu});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 40px;
  height: 40px;

  cursor: pointer;
  display: none;
  
  @media(max-width: 720px) {
    display: flex;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const IconLogo = styled.div`
  display: flex;

  background-image: url(${ImgLogo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 80px;
  height: 80px;

  cursor: pointer;

  @media(max-width: 720px) {
    display: none;
  }
`;
export { HeaderWrap, Container, Menu, IconMenu, Logo, IconLogo };