import React from 'react';
import Header from '../components/Header';
import HomescreenMain from '../components/HomescreenMain';
import Footer from '../components/Footer';

function Homescreen(props) {
  return (
    <div className="App">
      <Header />
      <HomescreenMain />
      <Footer />
    </div>
  );
}

export default Homescreen;
