import * as React from "react";
import * as ReactDOM from "react-dom";
//import { AppContainer } from 'react-hot-loader';
//import configureStore, { history } from './store/configureStore';
//import Root from './components/Root';
import { Hello } from "./components/Hello";

//const store = configureStore();

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("app")
);

// render(
//   <AppContainer>
//     <Root store={store} history={history} />
//   </AppContainer>,
//   document.getElementById('app')
// );

// if (module.hot) {
//   module.hot.accept('./components/Root', () => {
//     const NewRoot = require('./components/Root').default;
//     render(
//       <AppContainer>
//         <NewRoot store={store} history={history} />
//       </AppContainer>,
//       document.getElementById('app')
//     );
//   });
// }