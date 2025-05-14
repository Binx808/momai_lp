import React from 'react';

// Placeholder icons - replace with actual SVGs or an icon library
const FeatureIcon = ({ name }) => <div className="text-mom-ai-orange-button text-4xl mb-2">{name}</div>;

const featuresData = [
  {
    icon: <FeatureIcon name="❤️" />, // Placeholder for heart icon
    title: 'Personalized Support',
    description: 'Rika tailors recommendations, reminders, and resources to your family’s unique needs.',
  },
  {
    icon: <FeatureIcon name="✔️" />, // Placeholder for checklist icon
    title: 'Family Collaboration',
    description: 'Manage tasks, track milestones, and soon share calendars with your loved ones.',
  },
  {
    icon: <FeatureIcon name="🌍" />, // Placeholder for globe icon
    title: 'Global Community',
    description: 'Join forums, support groups, and celebrate milestones with moms worldwide.',
  },
  {
    icon: <FeatureIcon name="⭐" />, // Placeholder for star icon
    title: 'Rewards System',
    description: 'Earn points with our parent-to-earn system, redeemable for exclusive benefits.',
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-mom-ai-blue py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-mom-ai-dark-font mb-12 font-montserrat">Why Mom.AI?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-mom-ai-dark-font mb-2 font-montserrat">{feature.title}</h3>
              <p className="text-gray-600 font-opensans">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
