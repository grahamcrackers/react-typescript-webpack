import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';
import configureStore, { history } from './store/configureStore';
import './styles/styles.scss';
import { loadState, saveState } from './utils/localStorage';

const persistedState = loadState();
const store = configureStore(persistedState);

// log
console.log(store.getState());

store.subscribe(() => {
    saveState({
        todos: store.getState().todos
    });
});

ReactDOM.render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./components/Root', () => {
        // tslint:disable-next-line:no-var-requires
        const NewRoot = require('./components/Root').default;
        ReactDOM.render(
            <AppContainer>
                <NewRoot store={store} history={history} />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}
