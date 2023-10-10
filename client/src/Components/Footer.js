import React from "react";
import "../Resources/Stylesheets/footer.css";

const Footer = () => {
  return (
    <div class="footer">
      <p>
        Made with ♥️ by{" "}
        <a target="blank" href="https://www.linkedin.com/in/kashif-sheikh-b5b46b246" className="link">
          Kashif Sheikh
        </a>
      </p>
      <p>
        <a href="https://github.com/kashif1372/">
          <i className="fa fa-github fa-2x link"></i>
        </a>
      </p>
    </div>
  );
};

export default Footer;
