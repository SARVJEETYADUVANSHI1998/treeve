import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <Wrapper>
    <section className='contact-short'>
        <div className='grid  grid-two-column'>
            <div>
                <h3 className='rd'>Ready to get started?</h3>
                <h3 className='rd1'>Talk to us today</h3>
            </div>
            <div className='btn2'>
                <Button >
                    <NavLink to='/services' className= 'get'>Get Start</NavLink>
                </Button>
            </div>

        </div>
    </section>

    {/* footer */}

      <footer>
        <div className='container grid grid-four-column'>
           <div className='footer-about'>
               <h3 className='hT'>TreeVe</h3>
               <p>TreeVe Bring green revolution.Trees are the basis of sustaining life on earth.</p>
           </div>

          
           <div className='footer-social'>
               <h3 className='hc'>Connect with us</h3>
               <div className='footer-social--icon'>
               <a href='https://www.instagram.com/'>
                <BsInstagram className="icon"/>
               </a>
               </div>
           </div>

           <div className='footer-subscribe'>
            <h3 className='hc'>Get Imortant updates</h3>
            <form action='#'>
                <input type='email' placeholder='email' className='email' />
                <input type='submit' value='subscribe' className='submit'/>
            </form>
           </div>

           <div className='foooter-contact'>
             <h3 className='hc'>Call Us</h3>
             <a href='tel:5551234567' className='tel'>+91 22-23445-450</a>

           </div>
           </div>

       {/* bootom footer */}

         <div className='footer-bottem--section'>
          <hr/>
          <div className='container grid grid-two-column'>
             <p className='copyr'>
                @{new Date().getFullYear()} TreeVe. All Rights Reserved
             </p>
             <div>
                <p className='pp'>PRIVACY POLICY.</p>
                <p className='pp'>TERMS & CONDITIONS.</p>
             </div>
          </div>

         </div>
      </footer>
     

    </Wrapper>
  )
};

const Wrapper = styled.section`
  

  .copyr,
  .pp{
    display:flex;
    font-size:16px;
    font-weight:700;
    margin-top:20px;
  }

  

   .email{
    border:1px solid whitesmoke;
    margin:5px;
    max-length:20;
    width:auto;
    height:16px;
    border-radius:3px;
    box-shadow:0px 1px 2px 0px rgba(0,0,0,0.5);
   }
   .tel{
       font-size:16px;
       font-weight:700;
   }

   .submit{
    width:auto;
    padding:5px 10px;
    margin:5px;
    border:1px solid whitesmoke;
    border-radius:5px;
    text-transform:capitalize;
    box-shadow:0px 1px 2px 0px rgba(0,0,0,0.5);
   }


  .hc{
     font-size:25px;
     font-weight:800;
  }
 .icon{
    font-size:40px;
    color:rgb(156, 17, 133);
    border:1px solid red;


 }


  .hT{
    font-size:25px;
    font-weight:800;
    margin-top:-25px;
  }



   .btn2{
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    top:-12px;
    
    
         .get{
            color:whitesmoke;
            text-transform:capitalize;
            box-shadow:0px 1px 2px 0px rgba(0,0,0,0.5);
         }
     
   }
   .rd,.rd1{
        display:flex;
        align-items:center;
        position:relative;
      
        font-size:18px;
        font-weight:600;
    }


    .contact-short{
        max-width:42vw;
        margin:auto;
        padding:20px 20px;
        background-color:rgb(240,240,240);
        border-radius:1rem;
        box-shadow:0px 1px 2px 0px rgba(0,0,0,0.5);
        transform:translate(50%);
        display:flex;
        position:relative;
        right:22%;
        top:30px;
      

       
    }

    .grid div:first-child{
            justify-self:center;
            align-self:center;
        }
   footer{
    padding:14rem 0 9rem 0;
    
    background-color:rgb(51,50,50);

    h3{
        color:whitesmoke;
        margin-bottom:2.4rem;
       
    }
    p{
        font-size:14px;
        font-weight:600;
        color:whitesmoke;
    }


      .footer-social--icon{
             display:flex;
             gap:2rem;


             div{
                padding:1rem;
                border-radius:50%;
                border:2px solid rgb(145,145,200);
      

              .icon{
                color:rgb(185,135,200,0.4);
                font-size:30px;
                position:relative;
                cursor:pointer ;
                }


            }
       }
}

.footer-bottom--section{
    padding:9rem;

    hr{
        margin-bottom:2rem;
        color:whitesmoke;
        height:0.1px;
    }
}



@media(max-width:${({theme})=>theme.media.mobile}){
    .contact-short{
        max-width:72vw;
        margin:4.1rem auto;
        transform:translate(0%);
        text-align:center;
        display:flex;
        justify-content:center;
         position:relative;
         left:2px;
         height:90px;
         top:80px;


        .grid div:last-child{
            justify-self:center;
        }
    }
    .rd,.rd1{
        display:flex;
        align-items:center;
        position:relative;
        left:-120px;
        font-size:18px;
        font-weight:600;
    }

    footer{
    padding:9rem 0 9rem 0;
    }
   .footer-bottom--section{
    padding:4.5rem;
    }
    .btn2{
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    top:-80px;
    right:-85px;
        .get{
            color:whitesmoke;
            text-transform:capitalize;
            box-shadow:0px 1px 2px 0px rgba(0,0,0,0.5);
           }
   }
  
}
`;

export default Footer