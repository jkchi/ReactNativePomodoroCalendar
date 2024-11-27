import AppContainer from './AppContainer';
import { Provider } from 'react-redux';
import store from './store';
import React from "react";


function App() {
  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  );
}
export default App;

