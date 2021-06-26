import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import reducer from "./Reducer";
// items

import { createStore } from "redux";
import { Provider } from "react-redux";

// redux stuff

const store = createStore(reducer);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
