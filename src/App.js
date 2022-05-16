import React from "react";

import { Provider } from "react-redux";

import { MilkStore } from "./components/MilkStore";

import MilkContainer from "./components/MilkContainer";

function App() {
  return (
    <Provider store={MilkStore}>
      <div>
        <MilkContainer />
      </div>
    </Provider>
  );
}

export default App;
