import React from 'react';

const incentivesList = [
  "Be the first to access Mom.AI’s beta and shape its future.",
  "Earn exclusive $RIKA tokens upon launch as an early supporter.",
  "Get priority access to premium features and community events.",
  "Join a movement empowering millions of mothers worldwide."
];

const Incentives = () => {
  return (
    <section id="incentives" className="bg-mom-ai-beige py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-mom-ai-dark-font mb-10 font-montserrat">Join the Waitlist!</h2>
        <ul className="space-y-4 mb-10 max-w-md mx-auto text-left">
          {incentivesList.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-mom-ai-orange-button mr-2 text-2xl">✓</span>
              <span className="text-gray-700 font-opensans">{item}</span>
            </li>
          ))}
        </ul>
        <a 
          href="#waitlist" 
          className="bg-mom-ai-orange-button text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition duration-150 text-lg font-semibold"
        >
          Join Waitlist
        </a>
      </div>
    </section>
  );
};

export default Incentives;
