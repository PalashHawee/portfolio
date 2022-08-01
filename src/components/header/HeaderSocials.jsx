import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/palash-hawee/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/PalashHawee" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a
        href="https://stackoverflow.com/users/18250653/palash-hawee "
        target="_blank"
        rel="noreferrer"
      >
        <FaStackOverflow />
      </a>
    </div>
  );
};

export default HeaderSocials;
