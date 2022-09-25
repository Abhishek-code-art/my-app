import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';

function Header() {
    return (
    <header className="header">
        <h1><HighlightIcon />Keeper</h1>
        <nav>
            <ul className="login">
                <li><a href="/login" style={{textDecoration: "none"}}>SignIn</a></li>
            </ul>
        </nav>
    </header>
    );
}

export default Header;