import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/assets/mom_ai_logo.png" alt="Mom.AI Logo" className="h-10 w-10 mr-3" /> 
          <div>
            <a href="#" className="text-xl font-bold text-mom-ai-dark-font">Mom.AI</a>
          </div>
        </div>
        <nav className="space-x-4 flex items-center">
          <a href="#" className="text-mom-ai-dark-font hover:text-mom-ai-orange-button">Home</a>
          <a href="#features" className="text-mom-ai-dark-font hover:text-mom-ai-orange-button">Features</a>
          <a href="#token" className="text-mom-ai-dark-font hover:text-mom-ai-orange-button">Token</a>
          <a href="https://app.virtuals.io/geneses/1539" className="bg-mom-ai-orange-button text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition duration-150" target="_blank" rel="noopener noreferrer">Join $RIKA Launch</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
