import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import "./social.css";

const Social = () => {
  return (
    <>
      <div className="app__social">
        <AiFillInstagram color="#FFF" fontSize={27} cursor="pointer" />
        <AiFillFacebook color="#FFF" fontSize={27} cursor="pointer" />
        <AiOutlineTwitter color="#FFF" fontSize={27} cursor="pointer" />
      </div>
    </>
  );
};

export default Social;
