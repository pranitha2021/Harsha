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

const Contact = () => (
  <ContactSection id="contact">
    <h2>Contact Me</h2>
    <form>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message" rows="5" />
      <button>Send Message</button>
    </form>
  </ContactSection>
);

export default Contact;
