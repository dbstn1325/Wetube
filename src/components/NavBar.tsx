import { Link } from "react-router-dom";
import Logo from "./Logo";
import { NavBarWrpper, NavLinkWrapper, StyledNavLink } from "./LogoImg";

export default function NavBar() {
  const link = [
    {
      page: "Post",
      href: "/post",
    },

    {
      page: "Detail",
      href: "/post/:id",
    },
  ];
  return (
    <NavBarWrpper>
      <Logo />
      <NavLinkWrapper>
        {link.map((link) => (
          <StyledNavLink key={link.page} to={link.href}>
            {link.page}
          </StyledNavLink>
        ))}
      </NavLinkWrapper>
      {/* <ul className="navList">
        <li>
          <Link to="/">Youtube</Link>
        </li>
        <li>
          <Link to="/post">게시물</Link>
        </li>
        <li>
          <Link to="/post/:id">상세보기</Link>
        </li>
      </ul> */}
    </NavBarWrpper>
  );
}
