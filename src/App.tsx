import * as React from "react";

import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from '@material-ui/styles';
import green from '@material-ui/core/colors/green';
import { createMuiTheme } from '@material-ui/core/styles';
import {Router} from "common/components";

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                  <Route path="/" component={Router} />
              </Switch>
            </BrowserRouter>
          </Provider>
        </ThemeProvider>
    );
};

export default App;
