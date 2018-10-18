import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { default as NewRoot, default as Root } from './components/Root';
import configureStore, { history } from './store/configureStore';
import './styles/styles.scss';
//require('./favicon.ico'); // Tell webpack to load favicon.ico

const store = configureStore();

// ReactDOM.render(<Root />, document.getElementById('app'));

// if ((module as any).hot) {
//     (module as any).hot.accept('./components/Root', () => {
//         ReactDOM.render(
//             <AppContainer>
//                 <NewRoot />
//             </AppContainer>,
//             document.getElementById('app')
//         );
//     });
// }

ReactDOM.render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('app')
);

if ((module as any).hot) {
    (module as any).hot.accept('./components/Root', () => {
        const NewRoot = require('./components/Root').default;
        ReactDOM.render(
            <AppContainer>
                <NewRoot store={store} history={history} />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}
