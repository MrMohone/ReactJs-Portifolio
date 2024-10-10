import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars,FaTimes } from 'react-icons/fa'
import logo from '../Components/Asset/nav_underline.svg'

const Navbar = () => {
    const [underline, setUderline] = useState("home")
    const [click, setClick] = useState(false)
    const handleClick = ()=> setClick(!click)

    const [color,setColor] = useState(false)
    const changeColor = ()=>{
        if(window.scrollY >= 1){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor);


  return (
    <div className={color? 'header header-bg' : 'header' }>
     <div className='logo'>
     <Link to='/' className='logo1'>
        <h1>M</h1>
        <img src={logo}/>
      </Link>
     </div>
      <ul className={click? 'nav-menu active' : 'nav-menu'}>
        <li>
            <Link to='/'> Home </Link>
        </li>
        <li>
            <Link to='/project' onClick={()=>setUderline('project')}> Project </Link> 
        </li>
        <li>
            <Link to='/about' onClick={()=>setUderline('about')}> About </Link> 
        </li>
        <li>
            <Link to='/contact' onClick={()=>setUderline('contact')}> Contact </Link> 
        </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click? (<FaTimes size={20} style={{color:"red"}}/>) :
         ( <FaBars size={20} style={{color:"#fff"}}/>)}
      </div>
    </div>
  )
}

export default Navbar
