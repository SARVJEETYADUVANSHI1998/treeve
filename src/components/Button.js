import styled from "styled-components";

export const Button =styled.button`


 text-decoration:none;
 max-width:auto ;
 background-color:rgba(17, 54, 167, 0.904);;
 color:black;
 height:40px;
 font-size:20px;
 position:relative;
 left:70px;
 top:20px;
 padding:5px 20px;
 border-radius:8px;
 font-size:20px;
 font-weight:700;
 color:whitesmoke;
 border:none;
 text-transform:lowercase;
 text-align:center;
 cursor:pointer;
 transition:all .3s ease;
 -webkit-transition: all 0.3s ease 0s;
 -moz-transition: all 0.3s ease 0s;
 -o-transition: all 0.3s ease 0s;


  :hover,
  :active{
      box-shadow:1px 1px 1px rgba(0,0,0,0.5);
      transform:scale(0.96);
  }

  @media(max-width:${({theme})=>theme.media.moblie}){
    .btn{
      text-decoration:none;
   max-width:auto   ;
   height:auto;
   background-color:rgba(17, 54, 167, 0.904);;
   color:black;
   font-size:20px;
   position:relative;
   left:70px;
  
  
   padding:10px   20px;
   border-radius:8px;
   border:none;
   text-transform:lowercase;
   text-align:center;
   cursor:pointer;
   transition:all .3s ease;
   -webkit-transition: all 0.3s ease 0s;
   -moz-transition: all 0.3s ease 0s;
   -o-transition: all 0.3s ease 0s;


      :hover,
      :active{
                  box-shadow:1px 1px 1px rgba(0,0,0,0.5);
                  transform:scale(0.96);
              }
    }
  }



`;
