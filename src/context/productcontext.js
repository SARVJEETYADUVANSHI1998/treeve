import React, { useReducer } from "react";
import axios from 'axios';
import {createContext , useContext, useEffect} from "react";
import reducer from '../reducer/productReducer';

const AppContext = createContext();


const API= "https://api.pujakaitem.com/api/products";

const initialState ={
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    issingleLoading:false,
    singleProduct:{},//if which products value is true then show homepage.
}

const AppProvider = ({children}) =>{
     const[state , dispatch] = useReducer(reducer,initialState);
     const getProducts =async(url)=>{
        dispatch({type:"SET_LOADING"});
        try{  const res = await axios.get(url);
        const products = await res.data;
        dispatch({type:"SET_API_DATA", payload: products});
      }catch(error){
        dispatch({type:"API_ERROR"});
      }
    };

//api call fo single product.
const getSingleProduct = async (url)=>{
  dispatch({type:"SET_SINGLE_LOADING"});
   try{
    const res = await axios.get(url);
    const singleProduct = await res.data;
    dispatch({type:"SET_SINGLE_PRODUCT", payload: singleProduct});
   }catch(error){
    dispatch({type:"SET_SINGLE_ERROR"})

   }
}



   useEffect(()=>{
    getProducts(API);
   },[]);


    return ( 
    <AppContext.Provider value={{...state ,getSingleProduct }}>
        {children}
    </AppContext.Provider>
    );
};



//custome hooks
const useProductContext = ()=>{
    return useContext(AppContext);
}

export {AppProvider ,AppContext, useProductContext};
