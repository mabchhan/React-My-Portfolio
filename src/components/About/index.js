import React from "react";
import MyPicture from "../../assets/images/about.jpg";
function About() {
  return (
    <section className="container">
      <div className="row d-flex flex-column">
        <div className="col d-flex justify-content-center align-item-center">
          <img src={MyPicture} alt="Mab Chhan picture" className="about" />
        </div>
        <div className="col">
          <div className="col text-center">
            <h5>Mab Chhan</h5>
            <h5>Full-Stack Web Developer</h5>
          </div>
          <div className="px-5 mt-4">
            <p>
              Hello, I'm Mab, I got bachelor's degree in Information of
              Technology from University of Southeast-Asia. I recently attend in
              UCLA Extension's Full-Stack Web Developer program to refresh my
              knowledge of what I learned in university. And to learn new
              Technology and to challenge myself of what I thought I could not.
            </p>
            <br />
            <p>
              I am a curious person which makes me want to learn new things. I
              am a hard worker. I am a self-employed after I moved to USA to
              help my family since 2010.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
