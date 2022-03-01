import React from 'react';

import HomeComponent from '../../components/HomeComponent';

const Home: React.FC = () => {
  console.log('home');

  return (
    <>
      <HomeComponent />
      <h1>Projects</h1>
    </>
  );
};

export default Home;
