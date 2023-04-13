import React from 'react'
// import styles from '../navBar/navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import NavButton from '../navButton/navButton';
import styled from 'styled-components';
import { useState } from 'react';

const NavBar = () => {

   const [clicked, setClicked] = useState(false);

      const handleClick = () => {
         //when the value is true will passed it false and all over
         setClicked(!clicked)
      }

   return (
      <>
       <NavContainer>
         <div className='logo'>
            <img src={logo} alt='logo'/>
         </div>
         <div className={`links ${clicked ? 'active' : ''}`}>
            <Link to="/home">Home |</Link>
            {/* <Link to="/dashboard">Workouts |</Link> */}
            <Link to="/about">About|</Link>
            <Link to="/tours">Tours |</Link>
            <Link to="/contact">Contact</Link>
         </div>
         <div className='burger'>
            <NavButton clicked={clicked} handleClick={handleClick}/>
         </div>
      </NavContainer>
      </>
     
         
      
   )
}

export default NavBar;

const NavContainer = styled.nav`
   display: flex;
   -webkit-box-align: center;
   align-items: center;
   z-index: 100;
   background-color: white;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: center;
   margin-top: 2em;


.logo > img {
   width: 10em;
   margin-right:0;

  @media(min-width:768px){
   margin-right:3em;
   width: 5em;
 }
}

.links > a {
   text-decoration: none;
   color: grey;
   margin-right:1em;
   font-size: 12px;
}

.links {
   position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
   z-index:100;
   padding-bottom: 2em;
    a{
      color: grey;
      display: block;
    }
    a:hover {
      color:teal;
      font-size:20px;
      font-weight:bold;
    }
   @media(min-width:768px){
      margin: 0;
      position: initial;
    display: flex;
    flex-direction: row;
    align-content: center;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    padding-bottom: 0;
      a{
         font-size: 1.2em;
         color: grey;
         display: inline;
      }
    }

    @media(max-width: 1024px) {
      font-size: 13px;
     
    }
   }

   .links.active {
      width: 100%;
      display: block;
      margin-left: auto;
      margin-right: auto;
      top: 10%;
      left: 0;
      right: 0;
      text-align: center;
      background-color: white;
      z-index:100;
      
      a{
        font-size: 1.2rem;
        margin-top: 1rem;
        color: grey;
      }
      @media(min-width:768px){
         display: flex;
         flex-wrap: wrap;
         flex-direction: row;
         align-content: center;
         justify-content: center;
         align-items: center;
         padding-bottom: 0;
         a{
            font-size: 1.2rem;
            margin-top: 0;
            color: grey;
          }
      }
    }

    .links > button{
      Background-color: transparent;
      border: none;
      color: teal;
      font-size: 1.3em;
      margin-top: 1rem;
      margin-right: 1em;
      margin-bottom: 1em;
      
      @media(min-width:768px){
         display: flex;
         flex-wrap: wrap;
         flex-direction: row;
         align-content: center;
         justify-content: center;
         align-items: center;
         font-size: 1.3em;
         Background-color: transparent;
         border: none;
         color: teal;
         margin: 0;
      }
    }
    .links > button:hover{
      border: 1px solid teal;
      border-radius:5px;
      width:100px;
      height: 40px;
    }
  
.burger {
   display: flex;
    position: relative;
    right: -60px;
    top: -50px;
   @media(min-width:768px){
      display: none;
   }
}

`

  

