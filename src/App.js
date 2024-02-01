import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Cards from './components/cards';

function App() {
//   useEffect(() => {
//     const getAllCookies = () => {
//       const cookies = document.cookie.split(';').map(cookie => cookie.trim());
//       console.log('All Cookies:', cookies);
//     }
//     getAllCookies();
// }, [])

  return (
    <>
      <Helmet>
      <script src="https://app.enzuzo.com/apps/enzuzo/static/js/__enzuzo-cookiebar.js?uuid=e6196710-c0b4-11ee-9808-abbc9c2925d8"></script>
      </Helmet>
      <div className='px-20 bg-[#eeecec]'>
        <Header />
        <Cards />
      </div>
    </>
  );
}

export default App;
