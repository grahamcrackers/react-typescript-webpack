import * as React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import App from './App';

interface RootProps {
    store?: any;
    history?: any;
}

export default class Root extends React.Component<RootProps> {
    render() {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </Provider>
        );
    }
}
