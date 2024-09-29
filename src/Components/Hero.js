import React from 'react'
import './Hero.css'
import IntroImg from '../Components/Asset/leon-seibert-IjEsNibC4pc-unsplash.jpg'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='hero'>
       <div className='mask'>
        <img className='intro-img' src= {IntroImg} alt='Intro_Img' />
        </div>
        <div className='content'>
            <p>HI, I'M MOHAMMED</p>
            <h1>Front-end Developer</h1>
            <div>
                <Link to='/project' className='btn'>Projects</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero
