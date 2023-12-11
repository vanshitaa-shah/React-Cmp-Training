import React from "react";
import { ConfigProvider } from "antd";
import { theme } from "./theme/Theme";
import Header from "./components/header/Header";
import "./styles/main.scss";
import Home from "./pages/Home";

const App = () => (
  <div className="App">
    <ConfigProvider theme={theme}>
      <Header />
      <Home />
    </ConfigProvider>
  </div>
);

export default App;
