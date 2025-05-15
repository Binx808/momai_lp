import React from 'react';

// Placeholder for Base Logo - replace with actual SVG or image
const BaseLogo = () => <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-2">B</div>;

const TokenInfo = () => {
  return (
    <section id="token" className="bg-white py-16 border-t border-b border-mom-ai-blue">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-mom-ai-dark-font mb-6 font-montserrat">Join the $RIKA Ecosystem on Base</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto font-opensans">
          Mom.AI launches $RIKA on Base, facilitated through Virtuals Protocol. Co-own a stake in a global movement empowering mothers, where engagement drives value through inference fees, token buybacks, and burns. 
        </p>
        <div className="flex justify-center items-center mb-8">
        </div>
        <a 
          href="https://mom.ai/token" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-mom-ai-orange-button text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition duration-150 text-lg font-semibold"
        >
          Learn More
        </a>
        <div className="mt-4">
          <a 
            href="https://app.virtuals.io/geneses/1539/tokenomics" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline text-mom-ai-blue text-lg font-semibold"
          >
            Tokenomics
          </a>
        </div>
      </div>
    </section>
  );
};

export default TokenInfo;
