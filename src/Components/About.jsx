import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 100px 20px;
  text-align: center;
  background-color: #0b0c10;

  h2 {
    font-size: 2.5rem;
    color: #66fcf1;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
    color: #c5c6c7;
  }
`;

const About = () => (
  <AboutSection id="about">
    <h2>About Me</h2>
    <p>
    A highly motivated and detail-oriented front-end developer with one year of hands-on experience in building responsive and user-friendly web applications using React.js.
     Proficient in core web technologies such as HTML, CSS, and JavaScript, <br/>
     with a strong understanding of modern front-end frameworks and best practices. <br/>
     Skilled in SQL for managing and querying databases, and experienced in developing back-end functionality using ASP.NET Core. <br/>
     Adept at collaborating in dynamic team environments to deliver high-quality solutions that enhance user experience <br/>
     and meet business objectives. Passionate about learning new technologies and continuously improving my technical expertise.
    </p>
  </AboutSection>
);

export default About;
