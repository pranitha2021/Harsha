import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 100px 20px;
  background-color: #1f2833;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #66fcf1;
  }

  .skills {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    div {
      margin: 15px;
      padding: 10px 20px;
      background-color: #0b0c10;
      color: #ffffff;
      border-radius: 5px;
    }
  }
`;

const Skills = () => (
  <SkillsSection id="skills">
<h2>Skills</h2>
<div className="skills">
  <div>
    <strong>HTML:</strong> Proficient in creating structured and semantic web content.
  </div>
  <div>
    <strong>CSS:</strong> Skilled in designing responsive and visually appealing user interfaces.
  </div>
  <div>
    <strong>JavaScript:</strong> Experienced in developing dynamic and interactive web functionality.
  </div>
  <div>
    <strong>React:</strong> Expertise in building reusable components and managing state for scalable applications.
  </div>
  <div>
    <strong>Node.js:</strong> Knowledgeable in building server-side applications and RESTful APIs.
  </div>
  <div>
    <strong>MongoDB:</strong> Familiar with handling NoSQL databases for efficient data management.
  </div>
  <div>
    <strong>ASP.NET Core:</strong> Skilled in developing back-end services and APIs with .NET technologies.
  </div>
  <div>
    <strong>SQL:</strong> Experienced in designing, querying, and managing relational databases.
  </div>
</div>

  </SkillsSection>
);

export default Skills;
