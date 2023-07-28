import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav>Youtube</nav>
      <ul className="navList">
        <li>
          <Link to="/">Youtube</Link>
        </li>
        <li>
          <Link to="/post">게시물</Link>
        </li>
        <li>
          <Link to="/post/:id">상세보기</Link>
        </li>
      </ul>
    </>
  );
}
