import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from './config';
import GlobalStyle from './styles/GlobalStyle';
import themes from './styles/themes';
import Routes from './routes';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={themes[theme]}>
        <HashRouter>
          <Routes />
        </HashRouter>
      </ThemeProvider>
    </Fragment>
  );
}

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
