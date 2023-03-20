import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from "./Navbar";
const Header = () => {


  

  return (
    <MainHeader>
        <NavLink to="/" className="txt">
                <h1 className='h'>TreeVe</h1> 
        </NavLink>
        <Navbar />
    </MainHeader>
  )
};

const MainHeader = styled.header`


  background-color:${({theme})=>theme.colors.bg};
    
  

    display:flex;
    height:60px;
    justify-content:space-between;
    align-items:center;
    position:relative;
    ${'' /* border:1px solid green; */}
    width:auto;

.txt{
    text-decoration:none;
}
 


    h1{
        
        border:1px solid whitesmoke;
        border-radius:5px;
    
        
    
        background-color:green;
        padding:0px 10px ;
        font-size:35px;
      
    }
    .h{

        color:#fff;
        font-weight:900;
        
    }

`;


export default Header