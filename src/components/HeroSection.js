import React from "react";
import "./HeroSection.css";
import "../App.css";
import { Button } from "./Button";
import Avatar from '@material-ui/core/Avatar';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
        <div>
            <h1>Hello</h1>
            <h3>I am Dami Komolafe</h3>
            <Avatar alt="Dami" src="/static/images/avatar/1.jpg" className="avatar"/>
            <p>...a Computer-Software Engineer.</p>
            <h2 class="skillname">SKILLS</h2>
                <div className="skills">
                    <div className="inline-skill">
                    <img src="../../images/Favorites/icons8-css3-50.png" alt="" title="CSS3"/>
                    <img src="../../images/Favorites/icons8-html-5-50.png" alt="" title="HTML5"/>
                    <img src="../../images/Favorites/icons8-git-50.png" alt="" title="GIT" style={{'background-color': 'white'}}/>
                    <img src="../../images/Favorites/icons8-javascript-50.png" alt="" title="JavaScript"/>
                    <img src="../../images/Favorites/icons8-nodejs-50.png" alt="" title="NodeJS"/>
                    <img src="../../images/Favorites/icons8-react-50.png" alt="" title="React"/>
                    <img src="../../images/Favorites/icons8-python-50.png" alt="" title="Python"/>
                    <img src="../../images/Favorites/icons8-c-programming-50.png" alt="" title="C"/>
                    </div>
                </div>

            <div className="hero-btns">
                <Button
                    onClick={() =>
                    window.open(
                        "https://drive.google.com/file/d/1Xd8g45dgAFEZu-Q79IFdOiiqM4HLRkXN/view?usp=sharing",
                        "_blank"
                    )
                    }
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large">
                    RESUME
                </Button>
            </div>
      </div>
    </div>
  );
}

export default HeroSection;
