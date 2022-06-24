import React from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">

      <div>
        <Header />
      </div>
      <div className='flex-column md:flex justify-center align-middle'>
        <div className='md:w-1/3 overflow-y-auto md:max-h-screen max-h-60 ml-8 mr-2'>
          <List />
        </div>
        <div className='md:w-2/3 h-full md:h-full pt-8'>
          <Map />
        </div>
      </div>
      <div>
        <Footer />
      </div>


    </div>
  );
}

export default App;
