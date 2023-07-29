import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LogoImg = styled.img`
  width: 95px;
  cursor: pointer;
`;

const LogoImgWrpper = styled.div`
  width: 140px;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0 0 0.7rem;
`;

const NavBarWrpper = styled.nav`
  width: 100%;
  height: 3.5rem;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NavLinkWrapper = styled.div``;

const StyledNavLink = styled(NavLink)`
  img {
    width: 25px;
    height: 26px;
    margin-left: 0.25rem;
  }

  /* &:hover {
    border: 1px solid red;
    border-radius: 100%;
  } */
`;

export { LogoImg, LogoImgWrpper, NavBarWrpper, NavLinkWrapper, StyledNavLink };
