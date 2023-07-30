import { NavLink } from "react-router-dom";
import styled from "styled-components";

const VideoWrapperStyle = styled.div`
  margin-top: 3rem;
  width: 100%;
`;

const VideoListWrapperStyle = styled.div`
  width: 18.75rem;
  height: 15.625rem;
  display: flex;
`;

const VideoPlayer = styled.div`
  width: 20.75rem;
  border-radius: 0.5rem;
  background-color: black;
  margin-bottom: 0.72rem;
  margin-right: 0.97rem;

  iframe {
    width: 20.75rem;
    height: 13rem;
    border-radius: 0.5rem;
  }
`;

const VideoStyle = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const VideoContentStyle = styled.div`
  display: flex;

  img {
    width: 27px;
    height: 27px;
    margin-left: 0.07rem;
  }
`;

const VideoThumnailInfo = styled.div`
  margin-left: 1rem;
  width: 80%;
  display: flex;
  line-height: 1.39rem;
  flex-direction: column;
`;

export {
  VideoWrapperStyle,
  VideoListWrapperStyle,
  VideoPlayer,
  VideoStyle,
  VideoContentStyle,
  VideoThumnailInfo,
};
