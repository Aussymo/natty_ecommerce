import React from 'react'
import { FaRegSadCry } from 'react-icons/fa';
import Link from 'next/link';

const canceled = () => {
  return (
    <div className="success-wrapper">
    <div className="success">
      <p className="icon">
        <FaRegSadCry />
      </p>
      <h2>Looks like you canceled your order</h2>
      <p className="email-msg">Mistakes happen!</p>
      <p className="description">
        If you have any questions, please email or hit restart
        <a className="email" href="mailto:natty@example.com">
          natty@example.com
        </a>
      </p>
      <Link href="/">
        <button type="button" width="300px" className="btn">
          Restart
        </button>
      </Link>
    </div>
  </div>
  )
}

export default canceled