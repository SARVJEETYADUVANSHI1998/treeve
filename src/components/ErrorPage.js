import React from "react";
import styled from "styled-components";
import {Button} from "./Button"; 
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Wrapper>
       <div className='container'>
       <div>
          <h2>404</h2>
          <h3>Uh OH! You're lost.</h3>

          <p>the page your are looking for does not exist.
          how you got here is a mystery. but you can click the button below
          to go back to the homepage.</p>
          <NavLink to="/">
          <Button className="go">
              Go back to home 
          </Button>
          </NavLink>
       </div>

       </div>

    </Wrapper>
  )
};

const Wrapper = styled.section`

.container{
  padding:9rem 0;
  text-align:center;

     h2{
        font-size:10rem;
     }
     
    h3{
      font-size:5.2rem;
    }

    p{
      margin:2rem 0;
    }
    .go{
      text-transform:uppercase;
      font-size:18px;
      position:relative;
      left:-.8%;
    }
}


`;

export default ErrorPage;