import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import { AppContext } from '../context/productcontext';
//  import HomeSection from './HomeSection';
// import { useProductContext } from '../context/productcontext';

const About = () => {
  
  // const myName = useProductContext();

  const data={
        name:"G R E E N ",
        lname:"R E V O L U T I O N",
    }


  return (
    <>

      {/* {myName} */}
    {/* <HomeSection  myData={data}/> */}
      <Wrapper>
           <div className='container'>
           <div className='grid'>
           <div>
              <NavLink to='/' ><h3> Home /</h3></NavLink>
              <h3 className='about-p'>About Page</h3>
           </div>
           <p>
          The objective of the e-commerce website for selling plants<br/> is 
             
              to provide a convenient and user-friendly platform <br/> for 
            
            customers to purchase a wide variety of plants online. <br/> This 
           
          includes both indoor and outdoor plants, as well as<br/>  a range 
           of  accessories and supplies needed for plant care.</p>
             
             <NavLink to='/Products'>
             <img src='./images/meadow 1.jpg' alt='' width="500px"  
              height='400px' className='mead1'/>
             </NavLink>
              
            
           </div>
             <hr/>
             <div>
                <div className='mead2'>
                <NavLink>
                   <img src='./images/meadow 2.jpg'  
                        alt=''width="500px"
                   height="400px" className='made'/></NavLink>
                        <h2>
                        The website should aim to attract and retain a large<br/> customer base by offering a user-friendly interface, clear and accurate<br/>  product information, competitive prices, and fast and reliable shipping.<br/>  The website should also provide an easy and secure process for customers to<br/>  make purchases and manage their orders.

In addition to<br/>  generating revenue through plant sales and customer reviews.
                        </h2>
                   
                </div>
             </div>
 

              <div>
                <h1>Team Work</h1>
                <hr/>
                <h4 className='h4'>
                Our team of plant experts has carefully curated our selection to include only the best varieties, so you can trust that you are getting a healthy plant that will thrive in your space.

We know that shopping for plants online can be intimidating, so we have provided detailed care instructions for each of our plants to ensure that you have the information you need to keep your new addition happy and healthy.

We also offer a 100% satisfaction guarantee, so if you are not completely satisfied with your purchase, please let us know and we will make it right.

Thank you for choosing our website for your plant needs, and happy shopping!
                </h4>
             
              </div>


           </div>
           
      </Wrapper>
       
    </>
  );
};
 const Wrapper = styled.section`

 padding:7rem 5rem;


 p{
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  width:auto;
  height:auto;
  left:50%;
  top:40%;
  background-color:rgb(250,245,250);
  font-size:22px;
  color:black;
  font-weight:700;
  font-family: 'Courier New', Courier, monospace;
 }

 .mead1{
  display:flex;
  justify-content:center;
  
 }

 .mead2{
  border:none;
  background-image:transparent;
  position:relative;
 width:auto;
 height:auto;
 margin-top:30px;


 }
 h4{
  font-size:20px;
  margin-top:20px;
  line-height:25px;
 }

 .made{
  position:relative;
  left:73%;
 margin-top:110px;

  
 }
 h2{
  font-size:23px;
  line-height:22px;
  width:650px;
  height:350px;
  display:flex;
  position:absolute;
  top:25%;
  margin-left:10px;
  padding:10px;
  background-color:rgb(250,245,250);
  ${'' /* font-family: 'Courier New', Courier, monospace; */}
 }
 
${'' /* .container{
 display:inline-block;
   
   width:85rem;
   
  
}
h1{
  color:black;
  font-weight:600;
  font-family: source-code-pro, 
       Menlo, Monaco, Consolas, 
        'Courier New' ,
    monospace;
}



 .IMG{
  width:400px;
  height:400px;
  margin-top:30px;
  position:absolute;
  left:20px;
  
 }

 .para{
  display:flex;
  justify-content:right;
  align-items:center;
  position:absolute;
  left:50%;
  top:250px;
  color:black;
  font-family: source-code-pro, 
      Menlo, Monaco, Consolas, 
          'Courier New',
    monospace;
 }

 p1{
  display:flex;

 }

 .MEAD{
    position:relative;
    left:6rem;
  
  }

grid{
  display:inline-block;
  justify-content:center;
  align-items:center;
  position:relative;

  .mead1{
    display:grid;
    position:relative;
    left:20px;

  } */}

 
}
 `;


export default About;