import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';
import Logo1 from '../images/logo.svg'

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <HeaderWrapper>
      <Logo src={Logo1}></Logo>
      <NavMenu>
        <li>
          <a href="#">model s</a>
        </li>
        <li>
          <a href="#">model 3</a>
        </li>
        <li>
          <a href="#">model x</a>
        </li>
        <li>
          <a href="#">model y</a>
        </li>
        <li>
          <a href="#">sun roof</a>
        </li>
        <li>
          <a href="#">solar panel</a>
        </li>
      </NavMenu>
      <SideMenu>
        <li>
          <a href="#">shop</a>
        </li>
        <li>
          <a href="#">tesla account</a>
        </li>
        <MenuIconDiv
          onClick={() => {
            setShow(true);
          }}
        >
          <MenuIcon style={{ height: '100%' }} />
        </MenuIconDiv>
      </SideMenu>
      <RightMenu open={show}>
        <CloseDiv>
          <CloseIcon
            onClick={() => {
              setShow(false);
            }}
          />
        </CloseDiv>
        <li>
          <a href="#">model s</a>
        </li>
        <li>
          <a href="#">model 3</a>
        </li>
        <li>
          <a href="#">model x</a>
        </li>
        <li>
          <a href="#">model y</a>
        </li>
        <li>
          <a href="#">sun roof</a>
        </li>
        <li>
          <a href="#">solar panel</a>
        </li>
      </RightMenu>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;

  position: fixed;
  justify-content: space-between;
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 0 30px;
`;
const Logo = styled.img`
  height: 25px;
`;

const NavMenu = styled.div`
  display: flex;
  @media (max-width: 1100px) {
    display: none;
  }

  li {
    list-style: none;
    padding: 0 15px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 15px;
  }
`;
const SideMenu = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  li {
    list-style: none;
    padding: 0 15px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 15px;
    @media (max-width: 500px) {
      display: none;
    }
  }
`;
const MenuIconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const RightMenu = styled.div`
  background-color: white;
  height: 100%;
  transition: transform 0.2s;
  width: 350px;
  transform: ${props => (props.open ? 'translateX(0)' : 'translateX(400px)')};
  position: fixed;
  right: 0;
  top: 0;
  padding: 10px 35px;
  z-index: 10000;
  li {
    list-style: none;
    padding: 10px 10px;
    font-weight: 600;
    text-transform: uppercase;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  }
`;
const CloseDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
