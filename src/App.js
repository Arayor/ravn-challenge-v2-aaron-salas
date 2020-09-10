import React from 'react';
// import Header from "./_layout/Header";
// import Drawer from "./_layout/Drawer";
import Layout from './_layout'
import Theming from './Theme';

function App() {
  return (
    <div className="App">
      <Layout></Layout>
      {/* <Header />
      <Drawer /> */}
    </div>
  );
}

export default () =>
  <Theming>
    <App />
  </Theming>