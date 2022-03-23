import React from 'react';

import HomeComponent from '../../components/HomeComponent';
import Portfolio from '../../components/Portfolio';

const Home: React.FC = () => {
  console.log('home');

  return (
    <>
      {/* <RemoveScroll> */}
      <HomeComponent />
      {/* </RemoveScroll> */}

      {/* <Portfolio /> */}
    </>
  );
};

export default Home;
