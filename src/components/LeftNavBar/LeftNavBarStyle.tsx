import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LeftNavBarWrpperStyle = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 95px;
  height: 100%;
  top: 3.5rem;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  background-color: white;
  padding-top: 2.5rem;
`;

const LeftNavBarStyle = styled(NavLink)`
  img {
    width: 23px;
    height: 27px;
    /* margin-left: 0.25rem; */
    align-items: center;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.3rem;
  font-weight: 100;
  font-size: 0.5rem;
  font-family: Arial, Helvetica, sans-serif;
  /* &:hover {
    border: 1px solid red;
    border-radius: 100%;
  } */
`;

export { LeftNavBarWrpperStyle, LeftNavBarStyle };
