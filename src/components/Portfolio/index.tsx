import React, { useEffect, useState } from 'react';

import { Container, Content, Header } from './styles';
import PortfolioFilter from '../PortfolioFilter';
import PortfolioCard from '../PortfolioCard';
import Image from '../../assets/images/cardTest.jpg';

const projects = [
  {
    id: '1',
    name: 'teste1',
    tag: 'react',
  },
  {
    id: '2',
    name: 'teste2',
    tag: 'react',
  },
  {
    id: '3',
    name: 'teste3',
    tag: 'react',
  },
  {
    id: '4',
    name: 'teste4',
    tag: 'react',
  },
  {
    id: '5',
    name: 'teste5',
    tag: 'react',
  },
  {
    id: '6',
    name: 'teste6',
    tag: 'node',
  },
  {
    id: '7',
    name: 'teste7',
    tag: 'node',
  },
  {
    id: '8',
    name: 'teste8',
    tag: 'node',
  },
  {
    id: '9',
    name: 'teste9',
    tag: 'node',
  },
  {
    id: '10',
    name: 'teste10',
    tag: 'node',
  },
  {
    id: '11',
    name: 'teste11',
    tag: 'react-native',
  },
  {
    id: '12',
    name: 'teste12',
    tag: 'react-native',
  },
  {
    id: '13',
    name: 'teste13',
    tag: 'react-native',
  },
  {
    id: '14',
    name: 'teste14',
    tag: 'react-native',
  },
  {
    id: '15',
    name: 'teste15',
    tag: 'react-native',
  },
];
interface IProjects {
  id: string;
  name: string;
  tag: string;
}
const Portfolio: React.FC = () => {
  const [tag, setTag] = useState('all');
  const [projectFilters, setProjectFilters] = useState<IProjects[]>([]);

  useEffect(() => {
    if (tag === 'all') {
      return setProjectFilters(projects);
    }
    return setProjectFilters(
      projects.filter(item => item.tag === tag.toLocaleLowerCase()),
    );
  }, [tag]);

  console.log();

  return (
    <Container>
      <Header>
        <h1>
          MY <span>PORTFOLIO</span>
        </h1>
        <PortfolioFilter
          categories={['All', 'Node', 'React', 'React-Native']}
          action={setTag}
          tag={tag}
        />
      </Header>
      <Content>
        {projectFilters.map(item => (
          <PortfolioCard key={item.id} imgUrl={Image} />
        ))}
      </Content>
      <br />
      <br />
      <br />
    </Container>
  );
};

export default Portfolio;
