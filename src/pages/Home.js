import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, my name is Daeyeon. Welcome to my portfolio!</h2>
        <div className="prompt">
          <p>An aspiring Computer Science student with a passion for technological solution development!</p>
          <LinkedInIcon onClick={event =>  window.location.href='www.linkedin.com/in/dkoh05'}/>
          <GithubIcon onClick={event =>  window.location.href='https://github.com/dkoh05'}/>
        </div>
      </div>
      <div className="skills">
        <h1>Technical Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, React Native, NPM,
              MaterialUI, Yarn
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              SQLite
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
