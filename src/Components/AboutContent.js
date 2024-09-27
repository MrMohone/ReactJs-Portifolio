import './AboutContent.css'
import React from 'react'
import { Link } from 'react-router-dom'
import react1 from '../Components/Asset/product_24.png'
import react2 from '../Components/Asset/product_25.png'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Im I?</h1>
            <p>Im a react frotend Developer. I create responsive secure website from my clients</p>
            <Link to='/contact'>
               <button className='btn'>Contact</button>
             </Link>
        </div>
        <div className='right'>
          <div className='img-conatiner'>
             <div className='img-stack top'>
                <img src={react1} alt='no image' className='img'/>
             </div>
             <div className='img-stack bottom'>
                <img src={react2} alt='no image' className='img'/>
             </div>
          </div>
        </div>
    </div>
  )
}

export default AboutContent