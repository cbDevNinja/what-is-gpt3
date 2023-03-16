import React from 'react'
import './cta.css'

const CTA = () => {
  return (
    <div className='gpt3__cta' style={{maxWidth: '1440px', margin:'0 auto'}}>
      <div className="gpt3__cta-content">
        <p>Request Early Access</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className="gpt3__cta-btn">
        <button type="button">Get Started</button>
        </div>
    </div>
  )
}

export default CTA
