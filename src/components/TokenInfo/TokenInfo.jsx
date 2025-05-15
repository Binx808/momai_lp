import React from 'react';

// Placeholder for Base Logo - replace with actual SVG or image
const BaseLogo = () => <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-2">B</div>;

const TokenInfo = () => {
  return (
    <section id="token" className="bg-white py-16 border-t border-b border-mom-ai-blue">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-mom-ai-dark-font mb-6 font-montserrat">Become part of Mom.AI Ecosystem by Holding $RIKA on Base</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto font-opensans">
          Mom.AI launches $RIKA on Base, facilitated through Virtuals Protocol. Co-own a stake in a global movement empowering mothers, where engagement drives value through inference fees, token buybacks, and burns. 
        </p>
        <div className="flex justify-center items-center mb-8">
        </div>
        <a 
          href="https://app.virtuals.io/geneses/1539/tokenomics" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-mom-ai-orange-button text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition duration-150 text-lg font-semibold"
        >
          Learn More
        </a>
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-mom-ai-dark-font mb-4 font-montserrat">$RIKA Tokenomics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
            <div>
              <ul className="space-y-2">
                <li><span className="font-semibold">Public Sale:</span> 37.5% (Fixed Supply)</li>
                <li><span className="font-semibold">Liquidity Pool:</span> 12.5% (Fixed Supply)</li>
                <li><span className="font-semibold">Early Contributors:</span> 5.0% (100% 29-day cliff, immediate unlocks)</li>
                <li><span className="font-semibold">Marketing:</span> 4.0% (100% 2-month cliff, 6-month unlocks)</li>
                <li><span className="font-semibold">Developer:</span> 9.5% (100% 29-day cliff, 12-month unlocks)</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li><span className="font-semibold">Operations:</span> 4.0% (100% 1-month cliff, 24-month unlocks)</li>
                <li><span className="font-semibold">Ecosystem & Partnerships:</span> 5.0% (100% 7-month cliff, 24-month unlocks)</li>
                <li><span className="font-semibold">Community:</span> 22.5% (100% 4-month cliff, 100-week unlocks)</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <h4 className="text-lg font-semibold mb-2">Vesting Schedule</h4>
            <p className="text-gray-700 mb-4">Cliffs and unlocks are designed to ensure long-term alignment and sustainable growth for the Mom.AI ecosystem.</p>
            <a href="https://app.virtuals.io/geneses/1539/tokenomics" target="_blank" rel="noopener noreferrer" className="underline text-mom-ai-blue text-lg font-semibold">Full Tokenomics Details</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenInfo;
