import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const MotionLink = motion.create(Link);


// Animation variants for fade-in and slide-up effects
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardHover = {
  hover: { scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' },
};

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-600 text-white py-24 relative"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Discover Your Tech Journey with SkillSpark
          </motion.h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8">
            A platform built for students to explore, learn, and launch exciting careers in tech—from coding to design and beyond.
          </p>
          <motion.div
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255,149,0,0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              to="/explore"
              className="bg-black text-blue-300 font-semibold py-3 px-8 rounded-full border-2 border-gray-100 hover:bg-blue-400 hover:text-black transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Start Your Journey</span>
              <motion.span
                className="absolute inset-0 bg-blue-400 opacity-0"
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            At TechPath, we believe every student deserves a clear path to a rewarding tech career. Our platform offers free, curated resources, structured roadmaps, and a supportive community to help you master skills and achieve your dreams, no matter where you start.
          </p>
        </div>
      </motion.section>

      {/* Features Section with Cards */}
      <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12"
          >
            Why TechPath Stands Out
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Curated Resources',
                description: 'Access top-tier tutorials, articles, and tools handpicked from trusted sources like MDN, freeCodeCamp, and more.',
                icon: '📚',
              },
              {
                title: 'Step-by-Step Roadmaps',
                description: 'Follow clear learning paths for every tech stack, with topics, projects, and resources to guide you.',
                icon: '🗺️',
              },
              {
                title: 'Engaging Video Tutorials',
                description: 'Learn from beginner-friendly YouTube courses covering coding, design, AI, and more.',
                icon: '🎥',
              },
              {
                title: 'Supportive Community',
                description: 'Connect with peers, share projects, and get help from a global community of learners.',
                icon: '🤝',
              },
              {
                title: 'Career Insights',
                description: 'Explore salaries, roles, and future trends for each tech stack to plan your career.',
                icon: '💼',
              },
              {
                title: 'Accessible for All',
                description: 'Free, beginner-friendly content designed for students of all backgrounds and skill levels.',
                icon: '🌍',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.2, duration: 0.6 } },
                  hover: cardHover.hover,
                }}
                whileHover="hover"
                className="p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 flex flex-col items-center text-center"
              >
                <span className="text-4xl mb-4">{feature.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Tech Career Starts Here</h2>
          <p className="text-lg max-w-xl mx-auto mb-8">
            Dive into coding, design, AI, or gaming with TechPath’s free resources. Take the first step toward your dream career today!
          </p>
          <motion.div
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255,149,0,0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              to="/services"
              className="bg-black text-gray-200 font-semibold py-3 px-8 rounded-full border-2 border-b-cyan-300 hover:bg-indigo-400 hover:text-black transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Start Your Journey</span>
              <motion.span
                className="absolute inset-0 bg-blue-400 opacity-0"
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default About;