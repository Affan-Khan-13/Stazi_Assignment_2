import React, { useEffect } from 'react';
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
      
      <div className='px-20 bg-[#eeecec]'>
        <Header />
        <Cards />
      </div>
    </>
  );
}

export default App;
