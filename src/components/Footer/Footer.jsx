import React from 'react';

// Placeholder icons - replace with actual SVGs or an icon library
const SocialIcon = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-150">
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-mom-ai-dark-font text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <img src="/assets/mom_ai_logo.png" alt="Mom.AI Logo" className="h-10 w-10 mr-3" /> 
            <span className="text-xl font-bold font-montserrat">Mom.AI</span>
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            {/* Replace with actual icons */}
            <SocialIcon href="#"><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></SocialIcon> {/* Twitter/X Icon */}
            <SocialIcon href="#"><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19.205 5.599a.996.996 0 0 0-.996-.996H5.791a.996.996 0 0 0-.996.996v12.802c0 .55.446.996.996.996h12.414c.55 0 .996-.446.996-.996V5.599zm-1.992 1.992v1.992H7.783V7.591h9.43zm0 3.984v1.992H7.783v-1.992h9.43zm-3.176 3.984v1.992h-6.254v-1.992h6.254z"></path></svg></SocialIcon> {/* Discord Icon */}
            <SocialIcon href="#"><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.053 1.805.248 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.167.422.362 1.057.413 2.228.058 1.265.07 1.646.07 4.85s-.012 3.585-.07 4.85c-.053 1.17-.248 1.805-.413 2.227a3.487 3.487 0 0 1-.896 1.382c-.42.419-.819.679-1.381.896-.422.167-1.057.362-2.228.413-1.265.058-1.646.07-4.85.07s-3.585-.012-4.85-.07c-1.17-.053-1.805-.248-2.227-.413a3.492 3.492 0 0 1-1.382-.896 3.492 3.492 0 0 1-.896-1.381c-.167-.422-.362-1.057-.413-2.228-.058-1.265-.07-1.646-.07-4.85s.012-3.585.07-4.85c.053-1.17.248-1.805.413-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.167 1.057-.362 2.228-.413C8.415 2.175 8.796 2.163 12 2.163m0-1.623C8.71 0.54 8.32.528 7.052.472c-1.28-.056-2.16-.254-2.916-.542a5.125 5.125 0 0 0-1.98 1.182A5.125 5.125 0 0 0 .973 3.098c-.288.756-.486 1.637-.542 2.916C.373 7.28.36 7.67.36 11.998s.013 4.718.07 5.986c.056 1.28.254 2.16.542 2.916a5.125 5.125 0 0 0 1.182 1.98 5.125 5.125 0 0 0 1.98 1.182c.756.288 1.637.486 2.916.542 1.267.058 1.657.07 5.985.07s4.718-.013 5.985-.07c1.28-.056 2.16-.254 2.916-.542a5.125 5.125 0 0 0 1.98-1.182 5.125 5.125 0 0 0 1.182-1.98c.288-.756.486-1.637.542-2.916.058-1.267.07-1.657.07-5.985s-.013-4.718-.07-5.986c-.056-1.28-.254-2.16-.542-2.916a5.125 5.125 0 0 0-1.182-1.98A5.125 5.125 0 0 0 21.028.974c-.756-.288-1.637-.486-2.916-.542C16.822.373 16.432.36 12 .36zm0 5.831a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.075a3.912 3.912 0 1 1 0-7.824 3.912 3.912 0 0 1 0 7.824zM16.949 5.562a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z"></path></svg></SocialIcon> {/* Instagram Icon */}
          </div>
          <a href="mailto:support@mom.ai" className="text-gray-400 hover:text-white transition duration-150 font-opensans">Contact Us</a>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm font-opensans">&copy; {new Date().getFullYear()} Mom.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
