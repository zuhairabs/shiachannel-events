import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/admin";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import Add from "layouts/admin/add";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route exact path={`/home`} component={AdminLayout} />
          <Route exact path={`/add`} component={Add} />
          <Redirect from="/" to="/home" />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
