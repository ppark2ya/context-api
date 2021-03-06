import React from 'react';
import ReactDOM from 'react-dom';
import App from 'Components/App';
import { createGlobalStyle  } from 'styled-components';
import reset from 'styled-reset';
import './typography';
import * as serviceWorker from './serviceWorker';

createGlobalStyle `
${reset};
body {
    background-color: #ecf0f1;
}`;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
