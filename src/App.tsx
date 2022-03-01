import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';
import 'react-typing-text-animation/dist/index.css';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
