import React from 'react';
import FeatureProducts from './components/FeatureProducts';
// import styled from 'styled-components';
import HomeSection from './components/HomeSection';
import Services from './components/Services';
import Trust from './components/Trust';

const Home = () => {
  
  const data = {
    name:"Nature World",
  };

  return (
    <>
    <HomeSection myData ={data}/>
    {/* <FeatureProducts/> */}
    <Services/>
    <Trust/>
    </>
  )
};





export default Home;