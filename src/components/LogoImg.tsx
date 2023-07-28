import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LogoImg = styled.img`
  width: 110px;
  cursor: pointer;
`;

const NavBarWrpper = styled.nav`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NavLinkWrapper = styled.div``;

const StyledNavLink = styled(NavLink)``;

export { LogoImg, NavBarWrpper, NavLinkWrapper, StyledNavLink };
