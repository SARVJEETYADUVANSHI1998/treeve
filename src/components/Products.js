import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';
import styled from 'styled-components';
import SingleProduct from './SingleProduct';
const Products = () => {

  const{Price=1000}=SingleProduct;
  return (
    <Wrapper>

      <div>
      
      </div>
      <div className='container'>  
      <div className='imgsection  grid grid-four-column'>
          
            <NavLink to='/' className='img3  img-1'>
               <img src='./images/lily.jpg' alt='' className='img2'/>
               <p className='p1'>It is a Lemon tree. </p>
               <p className='p1'>
                 <FormatPrice Price={Price +190 } className={Price} />
                 </p>
                 <h4>Earliest Delivery: <p id='in-6'>Tommarow</p> </h4>
            </NavLink>
          

            <NavLink to='/' className='img3 img-1'>
               <img src='./images/hood.png' alt='' className='img2'/>
               <p className='p1'>It is a Lemon tree. </p>
               <p className='p1'>
                 <FormatPrice Price={Price +100} className={Price} />
                 </p>
                 <h4>Earliest Delivery: <p id='in-6'>Tommarow</p> </h4>
            </NavLink>
        

            <NavLink to='/' className='img3 img-1'>
               <img src='./images/chili.png' alt='' className='img2'/>
               <p className='p1'>It is a Lemon tree. </p>
               <p className='p1'>
                 <FormatPrice Price={Price+250} className={Price} />
                 </p>
                 <h4>Earliest Delivery: <p id='in-6'>Tommarow</p> </h4>
            </NavLink>
          

         
            <NavLink to='/' className='img3 img-1'>
               <img src='./images/wood.jpg' alt='' className='img2'/>
               <p className='p1'>It is a Lemon tree. </p>
               <p className='p1'>
                 <FormatPrice Price={Price+1575} className={Price} />
                 </p>
                 <h4>Earliest Delivery: <p id='in-6'>Tommarow</p> </h4>
            </NavLink>
        
        </div>
        <div className='imgsection  grid grid-four-column'>
           
        <NavLink to='/' className='img3 img-1'>
               <img src='./images/Guava Tree.jpg' alt='' className='img2'/>
               <p className='p1'>It is a Lemon tree. </p>
               <p className='p1'>
                 <FormatPrice Price={Price +1390 } className={Price} />
                 </p>
                 <h4>Earliest Delivery: <p id='in-6'>Tommarow</p> </h4>
            </NavLink>
            

           
            <NavLink to='/' className='img3 img-1'>
               <img src='./images/sugarcane.jpg' alt='' className='img2'/>
               <p className='p1'>It is a Lemon tree. </p>
               <p className='p1'>
                 <FormatPrice Price={Price +870} className={Price} />
                 </p>
                 <h4>Earliest Delivery: <p id='in-6'>Tommarow</p> </h4>
            </NavLink>
            

           
            <NavLink to='/' className='img3 img-1'>
               <img src='./images/cupflow.jpg' alt='' className='img2'/>
               <p className='p1'>It is a Lemon tree. </p>
               <p className='p1'>
                 <FormatPrice Price={Price+550} className={Price} />
                 </p>
                 <h4>Earliest Delivery: <p id='in-6'>Tommarow</p> </h4>
            </NavLink>
         

            
            <NavLink to='/' className='img3 img-1 '>
               <img src='./images/Banana trees.png' alt='' className='img2'/>
               <p className='p1'>It is a Lemon tree. </p>
               <p className='p1'>
                 <FormatPrice Price={Price+2575} className={Price} />
                 </p>
                 <h4>Earliest Delivery: <p id='in-6'>Tommarow</p> </h4>
            </NavLink>
         
        </div>
        <div className='imgsection  grid grid-four-column'>
           
           <NavLink to='/' className='img3 img-1'>
                  <img src='./images/bhodhi tree.jpg' alt='' className='img2'/>
                  <p className='p1'>It is a Lemon tree. </p>
                  <p className='p1'>
                    <FormatPrice Price={Price +390 } className={Price} />
                    </p>
                    <h4>Earliest Delivery: <p id='in-6'>Tommarow</p> </h4>
               </NavLink>
               
   
              
               <NavLink to='/' className='img3 img-1'>
                  <img src='./images/galina.jpg' alt='' className='img2'/>
                  <p className='p1'>It is a Lemon tree. </p>
                  <p className='p1'>
                    <FormatPrice Price={Price +180} className={Price} />
                    </p>
                    <h4>Earliest Delivery: <p id='in-6'>Tommarow</p> </h4>
               </NavLink>
               
   
              
               <NavLink to='/' className='img3 img-1'>
                  <img src='./images/inside.jpg' alt='' className='img2'/>
                  <p className='p1'>It is a Lemon tree. </p>
                  <p className='p1'>
                    <FormatPrice Price={Price+100} className={Price} />
                    </p>
                    <h4>Earliest Delivery: <p id='in-6'>Tommarow</p> </h4>
               </NavLink>
            
   
               
               <NavLink to='/' className='img3 img-1'>
                  <img src='./images/lemontree.jpg' alt='' className='img2'/>
                  <p className='p1'>It is a Lemon tree. </p>
                  <p className='p1'>
                    <FormatPrice Price={Price-275} className={Price} />
                    </p>
                    <h4>Earliest Delivery: <p id='in-6'>Tommarow</p> </h4>
               </NavLink>
            
           </div>
           <div className='imgsection  grid grid-four-column'>
           
           <NavLink to='/' className='img3 img-1'>
                  <img src='./images/mini Apple.jpg' alt='' className='img2'/>
                  <p className='p1'>It is a Lemon tree. </p>
                  <p className='p1'>
                    <FormatPrice Price={Price +2000 } className={Price} />
                    </p>
                    <h4>Earliest Delivery: <p id='in-6'>Tommarow</p> </h4>
               </NavLink>
               
   
              
               <NavLink to='/' className='img3 img-1'>
                  <img src='./images/mini orange.jpg' alt='' className='img2'/>
                  <p className='p1'>It is a Lemon tree. </p>
                  <p className='p1'>
                    <FormatPrice Price={Price +370} className={Price} />
                    </p>
                    <h4>Earliest Delivery: <p id='in-6'>Tommarow</p> </h4>
               </NavLink>
               
   
              
               <NavLink to='/' className='img3 img-1'>
                  <img src='./images/Bonsai.jpg' alt='' className='img2'/>
                  <p className='p1'>It is a Lemon tree. </p>
                  <p className='p1'>
                    <FormatPrice Price={Price+50} className={Price} />
                    </p>
                    <h4>Earliest Delivery: <p id='in-6'>Tommarow</p> </h4>
               </NavLink>
            
   
               
               <NavLink to='/' className='img3 img-1'>
                  <img src='./images/kri.jpg' alt='' className='img2'/>
                  <p className='p1'>It is a Lemon tree. </p>
                  <p className='p1'>
                    <FormatPrice Price={Price+275} className={Price} />
                    </p>
                    <h4>Earliest Delivery: <p id='in-6'>Tommarow</p> </h4>
               </NavLink>
            
           </div>
      </div>


    </Wrapper>
  )
};
const Wrapper = styled.section`

padding:7rem 2rem;

.container{
  display:inline-block;
  justify-content:center;
  align-items:center;
  width:80rem;
  height:100%;
  margin-left:20%;
  background-color:rgb(245,245,250);

}
.imgsection {
    width:auto;
    height:250px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    overflow:none;
  }
#in-6{
    color:green;
    font-size:12px;
    font-weight:600;
    float:right;
    margin-top:-2px;
    margin-right:15px;
}

h4{
    font-size:10px;
    color:black;
    padding-left:9px;
    padding-top:4px;
}


.img3{
  cursor:pointer;
    width:160px;
    height:230px;
    margin:-2px -30px -2px -30px ;
    background-color:rgba(245,245,245);
}


.img2{
        width:160px;
        height:150px;
        position:relative;
         border-radius:0px;
      
        box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.2); 
     }
     
.img2:hover{
       transition:all .2s ease-in;
        border:1px solid green;
        box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.5); 
     }

     
     .p1{
    display:flex;
    font-size:15px;
    font-weight:500;
    color:black;
    font-family:'Segoe UI';
    margin-left:10px;
}

@media(max-width:${({theme})=>theme.media.mobile})and (max-width:${({theme})=>theme.media.tab}){

  .container{
  display:grid;
  justify-content:center;
  align-items:center;
  width:auto;
  height:100%;

  background-color:rgb(245,245,250);

}
.imgsection {
    width:auto;
    height:250px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    overflow:none;
  
#in-6{
    color:green;
    font-size:12px;
    font-weight:600;
    float:right;
    margin-top:-2px;
    margin-right:15px;
}

h4{
    font-size:10px;
    color:black;
    padding-left:9px;
    padding-top:4px;
}

  .img2{
    cursor:pointer;
    width:150px;
    height:150px;
    ${'' /* margin:-2px -30px -2px -30px ;
    background-color:rgba(245,245,245); */}
  } 
  
  .img-1{
    margin:5px;
  }
  

}




};
 
`;

export default Products;