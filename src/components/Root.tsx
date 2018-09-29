import * as React from 'react';
import { hot } from 'react-hot-loader';
import Hello from './Hello';

class Root extends React.Component {
    render() {
        return <Hello compiler="Typescript" framework="React" />;
    }
}

export default hot(module)(Root);
