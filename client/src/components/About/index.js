import React from "react";

function About(props) {
  return (
    // <div className="col-lg-6 col-12 about">
    // 	<div className="mx-5 h-100 d-flex flex-column justify-content-center align-items-center">
    // 		<h2 className="display-4 mb-5 info__title about__title">About Me</h2>
    // 		<p className="text-left">
    // 			I am a dedicated full-stack web developer skilled in
    // 			responsive web development. I am passionate about combining
    // 			technology and design to build and optimize elegant,
    // 			user-centric websites.
    // 		</p>
    // 	</div>
    // </div>
    <div className="col-lg-6 col-12">
      <div className="about">
        <h2 className="info__title about__title">About Me</h2>
        <p className="text-left">
          I am a dedicated full-stack web developer skilled in responsive web development.
          I am passionate about combining technology and design to build and optimize
          elegant, user-centric websites.
        </p>
      </div>
    </div>
  );
}

export default About;
