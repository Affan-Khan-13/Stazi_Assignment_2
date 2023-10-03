import { Link } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Cards from './components/cards';

function App() {
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
