import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';
import NewRoot from './components/Root';
import './styles/styles.scss';
//require('./favicon.ico'); // Tell webpack to load favicon.ico


ReactDOM.render(<Root />, document.getElementById('app'));

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
