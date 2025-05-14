import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="bg-mom-ai-beige py-20" style={{ backgroundImage: "url(/assets/mom_ai_logo.png)", backgroundRepeat: "repeat", backgroundSize: "100px", backgroundPosition: "center", backgroundBlendMode: "overlay", backgroundColor: "rgba(245, 245, 220, 0.85)" }}>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <img src="/assets/rika_illustration.png" alt="Mother holding child illustration" className="rounded-lg shadow-xl max-w-md w-full" />
        </div>
        <div className="md:w-1/2 md:pl-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-mom-ai-dark-font mb-6 font-montserrat">Empower Your Motherhood Journey with Mom.AI</h1>
          <p className="text-lg text-gray-700 mb-8 font-opensans">Rika, your AI companion, helps you manage family tasks, connect with other moms, and earn rewards—all in one beautiful app.</p>
          <a href="#waitlist" className="bg-mom-ai-orange-button text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition duration-150 text-lg font-semibold">Join Waitlist</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
