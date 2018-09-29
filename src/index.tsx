import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
//import configureStore, { history } from './store/configureStore';
import Root from './components/Root';
import NewRoot from './components/Root';
//import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
//require('./favicon.ico'); // Tell webpack to load favicon.ico
//const store = configureStore();

ReactDOM.render(
    <Root />,
    document.getElementById('app')
);

if ((module as any).hot) {
    (module as any).hot.accept('./components/Root', () => {
        ReactDOM.render(
        <AppContainer>
          <NewRoot />
        </AppContainer>,
        document.getElementById('app')
      );
    });
  }