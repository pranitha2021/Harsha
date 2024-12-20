import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 100px 20px;
  text-align: center;

  h2 {
    color: #66fcf1;
  }

  form {
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    max-width: 500px;

    input, textarea {
      margin-bottom: 15px;
      padding: 10px;
      border: 1px solid #c5c6c7;
      border-radius: 5px;
    }

    button {
      padding: 10px;
      background-color: #66fcf1;
      border: none;
      color: #0b0c10;
      cursor: pointer;

      &:hover {
        background-color: #45a29e;
      }
    }
  }
`;

const Icon = styled.a`
 color: #ddd;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;

    &:hover{
    color: #007bff;}
`;

const FooterSocial = styled.div`
display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Contact = () => (
  <>
  <ContactSection id="contact">
    <h2>Contact Me</h2>
    <form>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message" rows="5" />
      <button>Send Message</button>
    </form>
    <FooterSocial>
          <Icon href="https://www.instagram.com/harsha_0308/" target="_blank" rel="noopener noreferrer" >Instagram</Icon>
          {/* <Icon href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</Icon> */}
          <Icon href="https://www.linkedin.com/in/harsha-vardhan-b1bb8b235/" target="_blank" rel="noopener noreferrer" >LinkedIn</Icon>
    </FooterSocial>
  </ContactSection>
</>
);

export default Contact;
