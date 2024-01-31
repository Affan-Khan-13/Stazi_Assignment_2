import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Cards from './components/cards';

function App() {
  return (
    <>
      <Helmet>
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="a3f0407d-03f0-4934-ab4e-0b26f137a1cd" data-blockingmode="auto" type="text/javascript"></script>
      </Helmet>
      <div className='px-20 bg-[#eeecec]'>
        <Header />
        <Cards />
      </div>
    </>
  );
}

export default App;
