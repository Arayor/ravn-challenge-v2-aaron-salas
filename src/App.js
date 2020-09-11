import React from 'react';
import Layout from './_layout'
import Theming from './Theme';

export default function App() {
  return (
    <Theming>
      <div className="App">
        <Layout></Layout>
      </div>
    </Theming>
  );
}
