import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RotatingCube from './components/Cube';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex justify-center">
        <div className="flex justify-center w-36 h-36 rounded-full bg-red-500 border-4 absolute -mt-16"></div>
      </div>
      <div className="bg-bodyblue h-screen mb-auto mt-1"><div><RotatingCube /></div></div>
      <Footer />
    </div>
  );
}

export default App;

