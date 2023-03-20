import React,{useEffect} from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../context/productcontext';
import MyImage from './MyImage';
import { Container } from './Container';
import {TbTruckDelivery ,TbReplace} from "react-icons/tb";
import FormatPrice from '../Helpers/FormatPrice';


 const API=""
const SingleProduct = () => {
const {getSingleProduct, isSingleLoading, singleProduct} =
useProductContext();

const {id} = useParams();
 const {
  id:treeve,
  name,
  company,
  Price,
  description,
  category,
  stock,
  stars,review,image,
 }= singleProduct;

useEffect(()=>{
    getSingleProduct(`${API}?id=${id}`);
},[]);

if(isSingleLoading){
  return<div className='pagr_loading'>Loading....</div>
}

  return (
    <Wrapper>
      <pageNavigation title={name}/>
      <Container className="container">
        <div className='grid grid-two-column'>

        {/* //product image */}
         <div className='product_image'>
         <MyImage imgs={image}/>
         </div>
         {/* prodt data */}
         <div className='Product-data'>
            <h2>{name}</h2>
            <p>{stars}</p>
            <p>{review}</p>
            <p className='product-data-price'>
              MRP:
              <del>
                <FormatPrice Price={Price + 20}/>
              </del>
            </p>
              {/* <p className='product-data-price product-data-real-price'>
                  Deal of the day: <FormatPrice Price={Price}/>
              </p> */}

              <p>{description}</p>
              <div className='product-data-warranty'>
              <div className='product-warranty-data'>
                <TbTruckDelivery className="warranty-icon"/>
                <p>Free Delivery</p>
              </div>
              <div className='product-warranty-data'>
                <TbReplace className="warranty-icon"/>  
                <p> after 30 Days replacement</p>
              </div>

              </div>
              <div className='product-data-info'>
              <p>Available:
                 <span>{stock >0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                Id:<span>{id}</span>
              </p>
                <p>
                  ShopName: <span>{company}</span>
                </p>

              </div>
         </div>
        </div>
      </Container>
    </Wrapper>
  )
};

const Wrapper = styled.section`


`;

export default SingleProduct;