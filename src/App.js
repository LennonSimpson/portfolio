import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div class="flex flex-col h-screen">
      <Header />
      <div class="flex justify-center">
      <div class="flex justify-center w-36 h-36 rounded-full bg-red-500 border-4 absolute -mt-16"></div>
      </div>
      <p class="bg-bodyblue h-screen mb-auto mt-1"></p>
      <Footer />
    </div>
  );
}

export default App;

