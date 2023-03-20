import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';
import React from 'react';
import SingleProduct from './SingleProduct';
import FormatPrice from '../Helpers/FormatPrice';


const HomeSection = ({myData}) => {
    const  {name ,lname} = myData;

    const{
        Price=1000}=SingleProduct;
  return (
    <Wrapper className='container'>
        <div className='grid grid-two-column'>
            <div className='home-section'>
                <h3 className='intro-data'>Welcome to</h3>
                  <h1 className='nma'>{name}</h1>
                  {/* this page is about page . */}
                  <h2 className='hl'>{lname}</h2>
                   <p className='p1'>nature's first green is gold, <br/>her hardest hue to gold. her early leaf's a flower; <br/>but only so on hour. <br/>then leaf subsides to leaf. 
                    so eden sank to grief, <br/>so down goes down to day Nothing gold can stay.</p>
                    <NavLink to='/Products'>
                    <Button className='btn'>
                         show me
                    </Button>
                    </NavLink>
            </div>

            <div className='home-section-image'>
                <fig className="fig1">
                    <img src='./page2.jpg'  alt='' className='img-style1'/>
                    <img src='./page1.jpg' alt='' className='img-style2'/>
                </fig>
            </div>
        </div>

        <div className='imgsection  grid grid-four-column'>
            <div className='img3'>
            <NavLink to='/Products'>
               <img src='./images/lily.jpg' alt='' className='img2'/>
               <p className='p1'>It is a Lemon tree. </p>
               <p className='p1'>
                 <FormatPrice Price={Price +190 } className={Price} />
                 </p>
                 <h4>Earliest Delivery: <p id='in-6'>Tommarow</p> </h4>
            </NavLink>
            </div>

            <div className='img3'>
            <NavLink to='/Products'>
               <img src='./images/hood.png' alt='' className='img2'/>
               <p className='p1'>It is a Lemon tree. </p>
               <p className='p1'>
                 <FormatPrice Price={Price +100} className={Price} />
                 </p>
                 <h4>Earliest Delivery: <p id='in-6'>Tommarow</p> </h4>
            </NavLink>
            </div>

            <div className='img4 ' >
               <NavLink to='/Products'>
               <img src='./images/chili.png' alt='' className='img-1'/>
               <p className='p1'>It is a Lemon tree. </p>
               <p className='p1'>
                 <FormatPrice Price={Price+250} className={Price} />
                 </p>
                 <h4>Earliest Delivery: <p id='in-6'>Tommarow</p> </h4>
            </NavLink>
            </div>

            <div className='img4'>
              <NavLink to='/Products'>
               <img src='./images/wood.jpg' alt='' className='img-1'/>
               <p className='p1'>It is a Lemon tree. </p>
               <p className='p1'>
                 <FormatPrice Price={Price+1575} className={Price} />
                 </p>
                 <h4>Earliest Delivery: <p id='in-6'>Tommarow</p> </h4>
            </NavLink>
            </div>
        </div>
        <div className='imgsection  grid grid-four-column'>
            <div className='img5'>
            <NavLink to='/Products'>
               <img src='./images/Guava Tree.jpg' alt='' className='img2'/>
               <p className='p1'>It is a Lemon tree. </p>
               <p className='p1'>
                 <FormatPrice Price={Price +1390 } className={Price} />
                 </p>
                 <h4>Earliest Delivery: <p id='in-6'>Tommarow</p> </h4>
            </NavLink>
            </div>

            <div className='img5'>
            <NavLink to='/Products'>
               <img src='./images/sugarcane.jpg' alt='' className='img2'/>
               <p className='p1'>It is a Lemon tree. </p>
               <p className='p1'>
                 <FormatPrice Price={Price +870} className={Price} />
                 </p>
                 <h4>Earliest Delivery: <p id='in-6'>Tommarow</p> </h4>
            </NavLink>
            </div>

            <div className='img6 ' >
               <NavLink to='/Products'>
               <img src='./images/cupflow.jpg' alt='' className='img-1'/>
               <p className='p1'>It is a Lemon tree. </p>
               <p className='p1'>
                 <FormatPrice Price={Price+550} className={Price} />
                 </p>
                 <h4>Earliest Delivery: <p id='in-6'>Tommarow </p> </h4>
            </NavLink>
            </div>

            <div className='img6'>
              <NavLink to='/Products'>
               <img src='./images/Banana trees.png' alt='' className='img-1'/>
               <p className='p1'>It is a Lemon tree. </p>
               <p className='p1'>
                 <FormatPrice Price={Price+2575} className={Price} />
                 </p>
                 <h4>Earliest Delivery: <p id='in-6'>Tommarow</p> </h4>
            </NavLink>
            </div>
        </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
 
 padding:9rem 5rem;

.imgsection {
    width:auto;
    height:250px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    overflow:none;
    top:60px;
   
     

    
}
#in-6{
    color:green;
    font-size:12px;
    font-weight:600;
    float:right;
    margin-top:-2px;
    margin-right:33px;
}

h4{
    font-size:10px;
    color:black;
    padding-left:9px;
    padding-top:4px;
}






.img3,.img4,.img5,.img6{
    cursor:pointer;
    width:250px;
    height:230px;
    position:relative;
    background-color:rgba(245,245,245);
  

}

.img2,.img-1{
        width:180px;
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

     .img-1:hover{
       transition:all .2s ease-in;
        border:1px solid green;
        box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.5); 
     }


.home-section{
    display:inline-block;
    ${'' /* border:1px solid red; */}
    position:relative;
    left:40px;
    background-color:rgb(220,230,240);

    
    
}
.hl{
    display:flex;
    position:relative;
    top:0px;
    left:10px;
    font-size:30px;
    font-weight:800;
    

}
.home-section-image{
    display:inline-block;
    position:relative;
    left:-40px;

}
.fig1{
    display:flex;
    ${'' /* border:1px solid red; */}
    width:300px;
     height:350px; 
     
}
.intro-data{
    display:flex;
    position:relative;
    top:10px;
    left:10px;
    font-size:20px;
    font-weight:700;
    color:gray;
    font-family:pple-system, BlinkMacSystemFont, 'Segoe UI';
}
.nma{
    display:flex;
    position:relative;
    top:0px;
    left:10px;
    font-size:30px;
    font-weight:800;
    color:green;

}
.p1{
    display:flex;
    font-size:15px;
    font-weight:500;
    color:black;
    font-family:'Segoe UI';
    margin-left:10px;
}


@media (max-width:${({theme})=>theme.media.mobile})and (max-width:${({theme})=>theme.media.tab}){
    .home-section{
    display:grid;
    width:45%;
    overflow:hidden;
    position:relative;
    left:-10px;
    top:-35.5px;
    height:auto;
    float:left;
    clear:right;
    ${'' /* border:1px solid red; */}
    background-color:rgb(220,230,240);
    ${'' /* box-shadow:0px 1px 2px 0px rgba(0,0,0,0.5); */}
    
    .btn{
        position:relative;
        top:-2px;
        margin-top:10px;
        width:140px;
        height:40px;
        padding:7px 0px;
        font-size:20px;
        font-weight:600;
        color:whitesmoke;
    }
    
}


      
      

.imgsection {
    width:auto;
    height:100%;
    display:row;

    justify-content:center;
    align-items:center;
    overflow:none;
    
    .img3{
        display:flex;
        justify-content:center;
        position:relative;
        left:29.4%;
        top:-410px;
    }
    .img5{
        display:flex;
        justify-content:center;
        position:relative;
        left:29.5%;
        top:-160px;
    }
    .img-1,.img2{
      display:grid;
      gap:8px;
      width:150px;
      height:130px;
      

    }
    #in-6{
    color:green;
    font-size:10px;
    font-weight:600;
    float:right;
    margin-right:2px;
    margin-top:-2px;
    }

    .img4{
    cursor:pointer;
    display:flex;
    gap:8px;
    height:230px;
    
    position:relative;
    top:-170px;
    left:-35%;
    background-color:rgba(245,245,245);
  

}  
    .img6{
     cursor:pointer;
        display:flex;
        gap:8px;
        height:230px;
        
        position:relative;
        top:80px;
        left:-35.4%;
     

        background-color:rgba(245,245,245);
  

    }

    
}

.intro-data{
    display:flex;
    position:relative;
    top:8px;
    left:10px;
    font-size:20px;
    font-weight:700;
    color:gray;
    font-family:pple-system, BlinkMacSystemFont, 'Segoe UI';
}

.home-section-image{
    display:flex;
    position:relative;
    left:280px;
    top:-120%;
    width:45%;
    float:right;

   

   
}

.fig1{
    position:relative;
    width:300px;
    left:15px;
    height:300px;
    box-shadow:0px 1px 2px 0px rgb(0,0,0,0.5);
}
.img-style1{
    position:relative;
    z-index:2;
    width:150px;
}
.img-style2{
    position:relative;
    z-index:1;
    right:50px;
    
    
}

.nma{
    display:flex;
    position:relative;
    top:0px;
    left:10px;
    font-size:30px;
    font-weight:800;
    color:green;

}
.hl{
    display:flex;
    position:relative;
    top:0px;
    left:10px;
    font-size:30px;
    font-weight:800;
    

}
.p1{
    display:flex;
    font-size:15px;
    font-weight:500;
    font-family:'Segoe UI';
    margin-left:10px;
}

}

`;

export default HomeSection;