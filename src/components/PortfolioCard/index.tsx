import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

import { Container, Content } from './styles';

interface IPortfolioCard {
  imgUrl: any;
}

const PortfolioCard: React.FC<IPortfolioCard> = ({ imgUrl }) => {
  console.log();
  const [contentOpacity, setContentOpacity] = useState('');

  return (
    <Container imgUrl={imgUrl}>
      <Content
        onMouseEnter={() => setContentOpacity('opacityIn')}
        onMouseLeave={() => setContentOpacity('opacityOut')}
        contentOpacity={contentOpacity}
      >
        <h1>PROJECT ONE</h1>
        <p>View more</p>
        <FaGithub onClick={() => console.log('Mandei pro git')} size="22" />
      </Content>
    </Container>
  );
};

export default PortfolioCard;
