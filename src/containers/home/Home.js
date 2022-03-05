import React from 'react';

import Header from '../../HOC/layout/header/Header';
import Footer from '../../HOC/layout/footer/Footer';

export default function Home() {
  return (
    <>
      <div className="page">
        <Header />
        <div className="content"></div>
        <Footer />
      </div>
    </>
  );
}
