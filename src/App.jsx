import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import TokenInfo from './components/TokenInfo/TokenInfo';
import Incentives from './components/Incentives/Incentives';
import WaitlistForm from './components/WaitlistForm/WaitlistForm';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <TokenInfo />
      <Incentives />
      <WaitlistForm />
      <Footer />
    </div>
  );
}

export default App;
