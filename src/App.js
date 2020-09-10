import React from 'react';
import Layout from './_layout'
import Theming from './Theme';

function App() {
  return (
    <div className="App">
      <Layout></Layout>
    </div>
  );
}

export default () =>
  <Theming>
    <App />
  </Theming>