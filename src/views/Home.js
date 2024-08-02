import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import InvestorNewsletter from '../components/sections/InvestorNewsletter';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
        <FeaturesTiles />
      <FeaturesSplit invertMobile top Divider imageFill className="illustration-section-02" />
       {/*<Testimonial topDivider />*/}
       {/*<InvestorNewsletter topDivider/>*/}
       <Cta split />
    </>
  );
}

export default Home;