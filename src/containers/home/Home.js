import React from 'react';

import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/footer/Footer';

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
