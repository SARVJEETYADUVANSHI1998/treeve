import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FiShoppingCart } from "react-icons/fi";
import { CgClose, CgMenu } from "react-icons/cg";

import { useAuth0 } from "@auth0/auth0-react";
import userEvent from '@testing-library/user-event';
import { Button } from './Button';
const NavBar = () => {
   const[menuIcon , setMenuIcon]= useState();
   const { user,loginWithRedirect ,  isAuthenticated ,logout} = useAuth0();

const Nav = styled.nav`

   
   
   .nav-list{
       display:flex;
       gap:4.8rem;
       ${'' /* width:100%;
       height:100%; */}
      ${'' /* border:1px solid red; */}
       align-items:center;
       list-style:none;

   
   
   .nav-link {
           :link,
           :visited{
           display:inline-block;
           text-decoration:none;
           font-size:15px;
           font-weight:500;
           text-transform:capitalize;
           color:${({theme})=>theme.colors};
           transition:color 0.3s linear;
           }
           :hover,
           :active{
               color:${({theme})=>theme.colors.helper};
            }
       }
   }
   
   .mobile-nav-btn{
       display:none;
       background-color:transparent;
       cursor:pointer;
       border:none;
   
   }
   .mobile-nav-icon[name="close-outline"]{
       display:none;
   }

   .close-outline{
    display:none;
   }
   .cart-trolley--link{
       position:relative;
       ${'' /* top:10px; */}
   
       .cart-trolley{
           position:relative;
           font-size:3rem;
           right:20px; 
       }
   
       .cart-total--item{
           width:2.rem;
           height:2.rem;
           background-color:#000;
           position:absolute;
           color:#000;
           border-radius:50%;
           display:grid;
           place-items:center;
           top:-10%;
           left:35%;
           background-color:${({theme})=>theme.colors.helper};
       }
   }
   
   ${'' /* .user-login--name{
       text-transform:capitalize;
   }
   
   .user-logout,
   .user-login{
       font-size:1.4rem;
       padding:0.8rem 1.4rem;
   } */}
   
   @media (max-width: ${({theme})=>theme.media.mobile}){
       .mobile-nav-btn{
           display:inline-block;
           z-index:9999;
           border-color:gray;
   
           .mobile-nav-icon{
               font-size:4.2rem;
               color:#212529;
           }
       }
   
       .active .mobile-nav-icon{
           display:none;
           font-size:4.2rem;
           position:absolute;
           top:30%;
           right:10%;
           color:#212529;
           z-index:9999;
       }
   
       .active .close-outline{
           display:inline-block;
       }
   
       .nav-list{
         width:100vw;
         height:100vh;
           position:absolute;
           top:0;
           left:0;
           background-color:#fff;
           display:flex;
           justify-content:center;
           align-items:center;
           flex-direction:column;
           visibility:hidden;
           opacity:0;
           transform:translateX(100%);
           transition:all 3s linear ;
       }
       .active .nav-list{
           visibility:visible;
           opacity:1;
           transform:translateX(0);
           z-index:999;
           transform-origin:right;
           transition:all 3s linear;

           .nav-link{
            font-size:4.2rem;
           }
       }
   
       .cart-trolley--link{
           position:relative;
   
           .cart-trolley{
               position:relative;
               font-size:5.2rem;
           
           }
   
           .cart-total--item{
               width:3.2rem;
               height:3.2rem;
               font-size:2rem;
           }
   
   
       }
   
       .user-logout,
       .user-login{
           font-size:2.2rem;
           padding:0.8rem 1.4rem;
       }
   }
   
   
   `;
   

  return (
      <Nav>
            <div className={menuIcon ? "nav active" : "nav"}>
             <ul className='nav-list'>
                <li>
                    <NavLink to="/" className="nav-link  "
                   onClick={() => setMenuIcon(false)} >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/services" className="nav-link  "
                    onClick={() => setMenuIcon(false)}>Services</NavLink>
                </li>
                <li>
                    <NavLink to="/products" className="nav-link  "
                    onClick={() => setMenuIcon(false)}>Products</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="nav-link  "
                    onClick={() => setMenuIcon(false)}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="nav-link  "
                    onClick={() => setMenuIcon(false)}>Contact</NavLink>
                </li>
                <li>
                {isAuthenticated &&<p>{user.name}</p>
                }
                </li>

                { 
                    isAuthenticated ? (<li>
                <button onClick={() => logout({ returnTo: window.location.origin })}>
                    Log Out
                    </button>
                </li>
                ):(
                <li>
                <button
                onClick={() => loginWithRedirect()}>Log In</button>

                </li>)
                }

                
                

                <li>
                    <NavLink to="/cart" className="nav-link   cart-trolley--link ">
                    <FiShoppingCart className="cart-trolley" />
                    <span className='cart-total--item'>10</span>
                    </NavLink>
                </li>
             </ul>
             <div className='mobile-nav-btn'>
             <CgMenu name='menu-outline' className='mobile-nav-icon'
                onClick={() => setMenuIcon(true)}
             />
             <CgClose name='close-outline' className='mobile-nav-icon  close-outline'
                 onClick={() => setMenuIcon(false)}
             />
             </div>

            </div>
      </Nav>
  )
};



export default NavBar;