import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Portfolio
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.facebook.com/palashpaul.sangma"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com/PalashHawee"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/palashhawee/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Palash Hawee. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
