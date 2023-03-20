import React from 'react'
import styled from 'styled-components';

const Trust = () => {
  return (
    <Wrapper className='b-section'>
    <div className='container'>
        <h3 className='ht'>Trusted by 10+ People</h3>
        <div className='b-section-slider'>
           <div className='slide'>
             <img src="" alt=''/>
               <p>"I can't give you a house" he said, "The forest is my house." "But you may cut my branches off and build yourself a home" And so he did. Oh, the tree was happy.</p>
           </div>
           <div className='slide'>
           <img src="" alt=''/>
           <p>"I can't give you a house" he said, "The forest is my house." "But you may cut my branches off and build yourself a home" And so he did. Oh, the tree was happy.</p>
           </div>
           <div className='slide'>
           <img src="" alt=''/>
           <p>"I can't give you a house" he said, "The forest is my house." "But you may cut my branches off and build yourself a home" And so he did. Oh, the tree was happy.</p>
           </div>
           <div className='slide'>
           <img src="" alt=''/>
           <p>"I can't give you a house" he said, "The forest is my house." "But you may cut my branches off and build yourself a home" And so he did. Oh, the tree was happy.</p>
           </div>

        </div>
    </div>

    </Wrapper>
  )
};
const Wrapper =styled.section`

  padding:9rem 0;
  margin:50px;
  background-color:rgb(220,230,240);
  border-radius:5px;
  height:auto;
  box-shadow:0px 1px 2px 0px rgba(0,0,0,0.5);

.b-section{
    padding:80px 0;

}

.ht{
    display:flex;
     font-size:30px;
      width:50rem;
      position:relative;
      left:30%;
      height:7rem;
      cursor:pointer;
     background-color:rgb(210,220,240);   
    justify-content:center;
    align-items:center;
    box-shadow:0px 1px 2px 0px rgba(0,0,0,0.5);
    

}

.slide{
    width:20rem;
    height:30rem;
    display:grid;
    margin:5px;
    overflow:none;
    background-color:rgb(210,220,240);
        box-shadow:0px 1px 2px 0px rgba(0,0,0,0.5);
        border-radius:5px;
}
.b-section-slider{
    margin-top:30px;
    display:flex;
  
    cursor:pointer;
    justify-content:center;
    align-items:center;
    flex-direction:row;
}

@media(max-width:${({theme})=>theme.media.mobile}){
     .b-section-slider{
           margin-top:30px;
           display:grid;
           grid-template-columns:1fr 1 fr;
           text-align:center;
           
           
          
           
     }
     .slide{
        background-color:rgb(210,220,240);
        box-shadow:0px 1px 2px 0px rgba(0,0,0,0.5);
        border-radius:5px;
     }
     .ht{
    display:flex;
     font-size:30px;
      width:50rem;
      height:10rem;
      position:relative;
      left:20px;
     background-color:rgb(210,220,240);   
    justify-content:center;
    align-items:center;
    box-shadow:0px 1px 2px 0px rgba(0,0,0,0.5);
    

}
     
  
}
`;

export default Trust;