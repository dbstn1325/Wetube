import styled from "styled-components";

const SearchBarStyle = styled.input`
  width: 360px;
  height: 40px;
  padding: 0 10px;
  box-sizing: border-box;
  background: white;
  border: none;
  border-radius: 2px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;

  border-radius: 1rem 0 0 1rem;
  border: 1px solid rgb(238, 238, 238);

  &:focus {
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2);
    outline: none;
    border-color: rgba(18, 90, 167, 0.5);
  }
`;

const SearchBarWrapperStyle = styled.div`
  display: flex;
  align-items: center;
  padding-left: 6px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 12px;
    width: 20px;
    height: 20px;
    /* background: url('path_to_your_search_icon') no-repeat center center; */
    background-size: contain;
  }
`;

export { SearchBarStyle, SearchBarWrapperStyle };
