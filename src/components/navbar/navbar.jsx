import { useState } from 'react'
import './navbar.scss'

export const Navbar = () => {
  const [menubar,setMenubar]=useState(false);
  const user=true;
  return (
    <nav>
        <div className='left'>
            <a href='/' className='logo'>
                <img src='./logo.png' alt=''/>
                <div className='spand'>
                <span>Jadhav</span>
                <span>Estate</span>
                </div>
            </a>
            <a href='/'>Home</a>
            <a href='/about'>About</a>
            <a href='./contact'>Contact</a>
            <a href='./agent'>Agents</a>
        </div>
        <div className="right">
          {user?<div className='user'>
          <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''/>
          <span>Arjun</span>
          <a href='/profile' className='/signup'>Profile <div className='notification'>3</div></a>
          </div>:<><a href='/singin'>SignIn</a>
          <a className='signup' href='/signup'>SignUp</a></>}
            
            <div className="menuicon">
                <img src='/menu.png' onClick={()=>setMenubar(!menubar)} alt=''/>
            </div>
            <div className={menubar?"menu active" : "menu"}>
              <a href='/'>Home</a>
              <a href='/about'>About</a>
              <a href='./contact'>Contact</a>
              <a href='./agent'>Agents</a>
              <a href='/singin'>SignIn</a>
              <a href='/signup'>SignUp</a>
            </div>
        </div>
    </nav>
  )
}
