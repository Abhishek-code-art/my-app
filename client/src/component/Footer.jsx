import React from "react";

const date = new Date();

function Footer() {
    return <footer className="footer"><p>Copyright &copy; {date.getFullYear()}</p></footer>
}

export default Footer;