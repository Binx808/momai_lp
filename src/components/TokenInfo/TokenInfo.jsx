import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Placeholder for Base Logo - replace with actual SVG or image
const BaseLogo = () => <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-2">B</div>;

const tokenomicsData = [
  { name: 'Public Sale', value: 37.5, color: '#6ed6e9', desc: 'Fixed Supply' },
  { name: 'Liquidity Pool', value: 12.5, color: '#ffb347', desc: 'Fixed Supply' },
  { name: 'Early Contributors', value: 5.0, color: '#e6e96e', desc: '100% 29-day cliff, immediate unlocks' },
  { name: 'Marketing', value: 4.0, color: '#b39ddb', desc: '100% 2-month cliff, 6-month unlocks' },
  { name: 'Developer', value: 9.5, color: '#6ee9a6', desc: '100% 29-day cliff, 12-month unlocks' },
  { name: 'Operations', value: 4.0, color: '#ffe066', desc: '100% 1-month cliff, 24-month unlocks' },
  { name: 'Ecosystem & Partnerships', value: 5.0, color: '#6ec6e9', desc: '100% 7-month cliff, 24-month unlocks' },
  { name: 'Community', value: 22.5, color: '#ff7675', desc: '100% 4-month cliff, 100-week unlocks' },
];

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
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-mom-ai-dark-font mb-4 font-montserrat">$RIKA Tokenomics</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <ResponsiveContainer width={300} height={300}>
                <PieChart>
                  <Pie
                    data={tokenomicsData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={2}
                  >
                    {tokenomicsData.map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full md:w-1/2">
              <table className="w-full max-w-xl mx-auto text-left">
                <tbody>
                  <tr>
                    <td><span className="inline-block w-3 h-3 rounded-full" style={{background:'#6ed6e9'}}></span></td>
                    <td className="font-bold">Public Sale</td>
                    <td>Fixed Supply</td>
                    <td className="text-mom-ai-orange-button font-bold text-right">37.5%</td>
                  </tr>
                  <tr>
                    <td><span className="inline-block w-3 h-3 rounded-full" style={{background:'#ffb347'}}></span></td>
                    <td className="font-bold">Liquidity Pool</td>
                    <td>Fixed Supply</td>
                    <td className="text-mom-ai-orange-button font-bold text-right">12.5%</td>
                  </tr>
                  <tr>
                    <td><span className="inline-block w-3 h-3 rounded-full" style={{background:'#e6e96e'}}></span></td>
                    <td className="font-bold">Early Contributors</td>
                    <td>100% 29-day cliff, immediate unlocks</td>
                    <td className="text-mom-ai-orange-button font-bold text-right">5%</td>
                  </tr>
                  <tr>
                    <td><span className="inline-block w-3 h-3 rounded-full" style={{background:'#b39ddb'}}></span></td>
                    <td className="font-bold">Marketing</td>
                    <td>100% 2-month cliff, 6-month unlocks</td>
                    <td className="text-mom-ai-orange-button font-bold text-right">4%</td>
                  </tr>
                  <tr>
                    <td><span className="inline-block w-3 h-3 rounded-full" style={{background:'#6ee9a6'}}></span></td>
                    <td className="font-bold">Developer</td>
                    <td>100% 29-day cliff, 12-month unlocks</td>
                    <td className="text-mom-ai-orange-button font-bold text-right">9.5%</td>
                  </tr>
                  <tr>
                    <td><span className="inline-block w-3 h-3 rounded-full" style={{background:'#ffe066'}}></span></td>
                    <td className="font-bold">Operations</td>
                    <td>100% 1-month cliff, 24-month unlocks</td>
                    <td className="text-mom-ai-orange-button font-bold text-right">4%</td>
                  </tr>
                  <tr>
                    <td><span className="inline-block w-3 h-3 rounded-full" style={{background:'#6ec6e9'}}></span></td>
                    <td className="font-bold">Ecosystem & Partnerships</td>
                    <td>100% 7-month cliff, 24-month unlocks</td>
                    <td className="text-mom-ai-orange-button font-bold text-right">5%</td>
                  </tr>
                  <tr>
                    <td><span className="inline-block w-3 h-3 rounded-full" style={{background:'#ff7675'}}></span></td>
                    <td className="font-bold">Community</td>
                    <td>100% 4-month cliff, 100-week unlocks</td>
                    <td className="text-mom-ai-orange-button font-bold text-right">22.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8 text-center">
            <h4 className="text-lg font-semibold mb-2">Vesting Schedule</h4>
            <p className="text-gray-700 mb-4">Cliffs and unlocks are designed to ensure long-term alignment and sustainable growth for the Mom.AI ecosystem.</p>
          </div>
          <a 
            href="https://app.virtuals.io/geneses/1539/tokenomics" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-mom-ai-orange-button text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition duration-150 text-lg font-semibold mt-8 inline-block"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default TokenInfo;
