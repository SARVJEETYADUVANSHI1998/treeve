import React from "react";
import styled from "styled-components"; 

const Contact = () => {


  const Wrapper = styled.section`

  padding:5rem 0 5rem 0;
  text-align:center;
.text,
.email,
.message,
.btn1{
  border:1px solid whitesmoke ;
  box-shadow:0px 1px 2px 1px rgb(0,0,0,0.5);
}

.btn1{
  border-radius:5px;
}


.map{
  position:relative;
  top:15px;
}



  .container{
    margin-top:25px;

  
    .contact-form{
      max-width:50rem;
      margin:auto;
      cursor:pointer;
  
      .contact-inputs{
        display:flex;
        flex-direction:column;
        gap:3rem;
  
  
        input[type="submit"]{
          cursor:pointer;
          transition:all .2s ;
  
          :hover{
            background-color:rgb(220,20,20,);
            border:1px solid rgb(180, 135,230);
            color:rgb(133,133,133);
            transform:scale(1);
          }
        }
      }
    }
  
  }

 
  
  `;






  return (
    <Wrapper>
      <h2 className="common-heading" id="head">feel free to contact 
         us</h2>
        <iframe src="https://www.google.com/maps/embed? 
pb=!1m18!1m12!1m3!1d3562.936876056354!2d83.4428542!3d26.7463904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39915c8528156b9b%3A0x934806124932d00d!2sGorakhpur%20Airport!5e0!3m2!1sen!2sin!4v1671647504766!5m2!1sen!2sin" 
  width="100%"
  height="350" 
  style={{border:0}}
  allowfullscreen="" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade" className="map"
  title="map"></iframe>
 
      <div className="container">
         <div  className="contact-form">
          <form action="https://formspree.io/f/mlekrlkk" 
            method="POST"  
           className="contact-inputs">
            <input type='text' placeholder="username" 
                name="username" required  
                autoComplete="off"  
                 className="text"/>

            <input type='email' placeholder="Email"  
                    name="Email" autoComplete="off"
                 required  className="email" />

    <textarea name="Message"  placeholder="Write your message....."  autoComplete="off" 
              required  cols='30' rows='10' className="message"></textarea>  

              <input type='submit' value='send'  className="btn1"/>  
          </form>

         </div>

      </div>

    </Wrapper>
  )
};




export default Contact;