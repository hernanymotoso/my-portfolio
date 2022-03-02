import React from 'react';

import { Container } from './styles';

interface IPortfolioFilter {
  categories: string[];
  action(tag: string): void;
  tag: string;
}

const PortfolioFilter: React.FC<IPortfolioFilter> = ({
  categories,
  action,
  tag,
}) => {
  console.log();

  return (
    <Container>
      <ul>
        {categories.map(item => (
          <li key={item}>
            <button
              style={{
                color: `${
                  tag === item.toLocaleLowerCase() ? '#787cff' : '#000'
                }`,
              }}
              type="button"
              onClick={() => action(item.toLocaleLowerCase())}
            >
              {item.toLocaleUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default PortfolioFilter;
