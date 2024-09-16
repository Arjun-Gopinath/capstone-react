import React from "react";
import logo from "./Logo.svg";
import pages from "../utils/pages";

const navLinks = Array.from(pages.values()).filter((page) => page.anchorable);

const contacts = [
  { info: "678 Pisa Ave, Chicago, IL 60611" },
  { info: "(312) 593-2744" },
  { info: "customer@littlelemon.com" },
];

const socials = [
  { name: "facebook" },
  { name: "twitter" },
  { name: "instagram" },
  { name: "youtube" },
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container grid">
        <img className="site-footer-logo" src={logo} alt="Little Lemon" />
        <nav className="site-footer-nav">
          <h4>DoorMat Navigation</h4>
          <ul>
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <a href={navLink.path}>{navLink.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-footer-contact">
          <h4>Contact us</h4>
          <address>
            {contacts.map((contact, index) => (
              <p key={index}>{contact.info}</p>
            ))}
          </address>
        </div>
        <div className="site-footer-social">
          <h4>Social Media Links</h4>
          {socials.map((social, index) => (
            <a
              key={index}
              href={`https://www.${social.name}.com`}
              target="_blank"
              rel="noreferrer"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
