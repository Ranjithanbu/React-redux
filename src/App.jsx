import React from 'react';
import { ProductConfig } from './features/ProductStore';
import { Provider, useSelector } from 'react-redux';
import Display from './component/Display';

const App = () => {
  
  return (
    <div>
      <Provider store={ProductConfig}>

<Display/>

      </Provider>
    
    </div>
  );
};

export default App;