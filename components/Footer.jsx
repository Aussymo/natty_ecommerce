import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Natty Ecommerce All rights reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiFillLinkedin />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer