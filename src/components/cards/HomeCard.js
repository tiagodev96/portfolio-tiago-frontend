import React from "react";

function HomeCard() {
  return (
    <div className="card-container">
      <span className="pro">FRONT-END DEVELOPER</span>
      <div>
        <img className="round" alt="user" src="./assets/perfil-image.png" />
        <h3>Tiago Batista</h3>
        <h6>Brazil | Portugal</h6>
        <p>
          26 Years Old <br />2 Years of Front-End Development <br />
          &#10084; Tech and Coffee
        </p>
      </div>

      <div className="skills">
        <h6>Skills</h6>
        <ul>
          <li>UI / UX</li>
          <li>Front End Development</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
          <li>Git / GitHub</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    </div>
  );
}

export default HomeCard;
