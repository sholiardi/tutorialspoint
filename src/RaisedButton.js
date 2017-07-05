import React from 'react';
import ReactDOM from 'react-dom';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

const App = () => (
    <MuiThemeProvider>
        <MyAwesomeReactComponent />
    </MuiThemeProvider>
);

// injectTapEventPlugin();

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
