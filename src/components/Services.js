import React from "react";
import styled from "styled-components";
import { TbTruck } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";
const Services = () => {
  return (
    <Wrapper>

      <div className="container">
      <div className="grid grid-three-column">
        <div className="services-1">
           <div>
           
            <TbTruck className="icon-1"/>
            <h3 className="hd">Delivery in 1 day.</h3>
           </div>
        </div>
        <div className="services-2">
           <div className="services-column-2">
            <MdSecurity  className="icon"/>
            <h3 >Non-Contact-shipping</h3>
           </div>
           <div className="services-column-2">
           <GiReceiveMoney className="icon"/>
           <h3 >Money-Back Guaranteed</h3>
           </div>
        </div>

        <div className="services-1">
           <div>
            <RiSecurePaymentFill className="icon-1"/>
            <h3 className="hh">Safelly and  Secure Payment System </h3>
           </div>
        </div>
      </div>
        
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`

padding :9rem 0;
width:100%;

.grid{
  gap:30px;
}

.icon{
  font-size:30px;
  cursor:pointer;
 

}
.icon-1{
  font-size:30px;
  position:relative;
  top:40px;
  cursor:pointer;
}
.hh,
.hd{
  position:relative;
  top:50px;
  display:flex;
  cursor:pointer;
  justify-content:center;
  align-items:center;
}

.services-1,
.services-2,
.services-3{
    width:auto;
    height:20rem;
    cursor:pointer;
    display:flex;
    flex-direction:column;
    align-content:center;
    background-color:rgb(210,220,240);
    text-align:center;
    border-radius:5px;
    box-shadow:0px 1px 2px 0px rgba(0 ,0,0,0.5 );
}
.services-2{
  gap:3.4rem;
  background-color:transparent;
  box-shadow:none;


.services-column-2{
  
  background-color:rgb(210,220,240);
  flex-direction:column;
    align-items:center;
    flex:1;
    justify-content:center;
    border-radius:5px;
    box-shadow:0px 1px 2px 0px rgba(0 ,0,0,0.5 );


    div{
      display:flex;
      flex-direction:row;
      justify-content:center;
      align-items:center;
      gap:1rem;
    }
} }


`;

export default Services;