import React  from "react";
import {BrowserRouter as Router , Routes  , Route} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobaltStyle } from "./GlobalStyle";
import Home from "./Home";
import Header from "./components/Header";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import SingleProduct  from "./components/SingleProduct";
import Services from "./components/Services";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";


const App = () =>{
  
 


const theme = {
     //object pass here like theme.
   colors:{
         text:"rgba(29,29,29,.8)",    
          bg:"rgb(240, 240, 240)",
          helper:"green",
          footer_bg:"#0a1435",
          btn:"grey",
          border:"green",
          hr:"#ffffff",

   },
   media:{
      mobile:"768px ",
      tab:"998px",
   }
} 




  return(
     <>
     <ThemeProvider theme={theme}>
      <Router>
      <GlobaltStyle/>
      <Header/>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
          <Route path="*" element={<ErrorPage/>}/>
         </Routes>
         <Footer/>
      </Router>
      </ThemeProvider>
      
     </>
  )
};

export default App;
