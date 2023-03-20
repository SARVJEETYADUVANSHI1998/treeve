import styled from 'styled-components'
import {useProductContext} from '../context/productcontext';
import Product from './Product';


const FeatureProducts = () => {
     
    const { isLoading , featureProducts } = useProductContext();
    //   console.log("~ file:FeatureProducts.js ~ line 9 ~ featureProducts", featureProducts);
        if(isLoading){
            return <div>.....Loading</div>
        }


  return (
    <Wrapper className="section">
       <div className='container'>
        <div className='intro-data'>check Now</div>
            <div className='common- heading'> our feature services</div>
             <div className='grid grid-three-column'>
                {
                    featureProducts.map((curElem)=>{
                        return <Product key={curElem .id} {...curElem} />;
                    })
                }
             </div>

       </div>
    </Wrapper> 
    
    );

};

  const Wrapper =styled.section`
  
  padding:9rem 0;
  background-color:rgba(240,240,240,0.5);
  .container{
    max-width:120rem;
  }

   figure{
       width:auto;
       display:flex;
       justify-content:center;
       align-items:center;
       position:relative;
       overflow:hidden;
       transition:all 0.5s linear;


     ::after{
        content:"";
        position:absolute;
        top:0;
        left:0;
        width:0%;
        height:100%;
        background-color:rgba(0,0,0,0.5);
        transition:all .2s linear;
        cursor:pointer;
     }
    
    :hover ::after{
        width:100%;
    }

     :hover img{
          transform:scale(1.2);
     }

     img{
        max-width:90%;
        margin-top:1.5rem;
        height:20rem;
        transition:all  0.2s linear;
     }

   .caption{
    position:absolute;
    top:15%;
    right:10%;
    text-transform:uppercase;
    background-color:rgb(140 , 290, 220);
    color:black;
    padding:10px 15px ;
    font-size:1.2rem;
    border-radius:3px;


   }
 } 

    .card{
        background-color:#fff;
        border-radius:1px;
    }

      .card-data{
        padding:0 2rem;
      }



    .card-data-flex{
        margin:2rem 0;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    h3{
        color:gray;
        text-transform:capitalize;
    }
    
    .card-data--price{
        color:gray;
    }
    
    
    .btn{
        margin:2rem auto;
        background-color:rgb(0 0 0 / 0%);
        border:1px solid rgb(98 84 243);
         display:flex;
         justify-content:center;
         align-items:center;
    



  :hover{
    background-color:rgb(100,120,240);
  }
   :hover a{
    color:#fff;
   }

    a{
         color:rgb(100,140,240);
         font-size:1.4rem;
    }
   
}
  
  `;

export default FeatureProducts;