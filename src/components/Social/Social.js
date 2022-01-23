import React from 'react';
import { ReactComponent as Facebook } from "./facebook.svg";
import { ReactComponent as Instagram } from "./instagram.svg";
import { ReactComponent as Twitter } from "./twitter.svg";
import "./Social.css";

const Social = () => {
    return (
        <div className="socialbuttons img-fluid">
            <a href="https://www.facebook.com/lostlochspirits" data-bs-toggle="tooltip" data-bs-placement="left" title="Facebook"><Facebook /></a>
            <a href="https://twitter.com/lostlochspirits" data-bs-toggle="tooltip" data-bs-placement="left" title="Twitter"><Twitter /></a>
            <a href="https://www.instagram.com/lostlochspirits" data-bs-toggle="tooltip" data-bs-placement="left" title="Instagram"><Instagram /></a>
        </div>
    );
};

export default Social;