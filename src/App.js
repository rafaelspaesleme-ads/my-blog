import React from 'react';

import Routes from './Routes';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import './style.css';

function App() {
  return (
    <div className="App">
      <Body 
        contentHeader={<Header />} 
        contentBody={<Routes />} 
        contentFooter={<Footer />}
      /> 
    </div>
  );
}

export default App;
