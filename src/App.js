import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Header from "./components/sections/Header";
import { ChakraProvider } from "@chakra-ui/react";
// import img from "./images/ilustracion.png";

const App = () => {
  return (
    <ChakraProvider resetCSS>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
};
export default App;
