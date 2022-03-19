import React from 'react';
import '../../style.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';

function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <Cards />
      <Footer />
    </>
  );
}
export default Home;
