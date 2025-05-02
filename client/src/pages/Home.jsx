import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const MotionLink = motion.create(Link);
// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardTilt = {
  hover: { rotateY: 5, rotateX: -5, scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' },
};

const Home = () => {
  // Carousel state for tech stacks
  const [currentStack, setCurrentStack] = useState(0);
  const stacks = [
    { name: 'Frontend Development', description: 'Build stunning web interfaces with React and Vue.', icon: '🌐' },
    { name: 'AI & Machine Learning', description: 'Create intelligent systems with Python and TensorFlow.', icon: '🤖' },
    { name: 'Game Development', description: 'Design immersive games with Unity and Godot.', icon: '🎮' },
    { name: 'Data Science', description: 'Analyze data and extract insights with R and SQL.', icon: '📊' },
    { name: 'Cybersecurity', description: 'Protect systems and networks from threats.', icon: '🔐' },
    { name: 'Mobile Development', description: 'Develop apps for iOS and Android with Flutter.', icon: '📱' },
    { name: 'Cloud Computing', description: 'Leverage cloud platforms like AWS and Azure.', icon: '☁️' },
    { name: 'DevOps', description: 'Streamline development and operations with CI/CD.', icon: '🔧' },
  ];

  // Auto-scroll for carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStack((prev) => (prev + 1) % stacks.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animated counter component
  const Counter = ({ end, duration }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, 1000 / 60);
      return () => clearInterval(timer);
    }, [end, duration]);
    return <span>{count}</span>;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Hero Section with Carousel */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="min-h-screen flex items-center bg-gradient-to-br from-teal-500 via-blue-900 to-pink-900 relative"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Ignite Your Future with SkillSpark
          </motion.h1>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStack}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-2xl max-w-2xl mx-auto mb-8"
            >
              <span className="text-4xl mr-2">{stacks[currentStack].icon}</span>
              <span className="font-semibold">{stacks[currentStack].name}</span>: {stacks[currentStack].description}
            </motion.div>
          </AnimatePresence>
          <motion.div
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255,149,0,0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              to="/services"
              className="bg-black text-orange-400 font-semibold py-3 px-8 rounded-full border-2 border-orange-400 hover:bg-orange-400 hover:text-black transition-all duration-300 relative overflow-hidden"
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

      {/* Stats Section with Animated Counters */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20 bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400">
            Why Tech is Your Future
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                value: 1000000,
                label: 'Unfilled Tech Jobs',
                description: 'Globally in 2025, waiting for you.',
              },
              {
                value: 90000,
                label: 'Average Salary',
                description: 'For entry-level tech roles ($90K-$120K).',
              },
              {
                value: 15,
                label: 'Industry Growth',
                description: 'Annual growth rate through 2030.',
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.2, duration: 0.6 } },
                }}
                className="p-6 text-center"
              >
                <p className="text-5xl font-bold text-teal-400 mb-2">
                  <Counter end={stat.value} duration={2} />
                  {stat.label.includes('Salary') ? '$' : stat.label.includes('Growth') ? '%' : '+'}
                </p>
                <p className="text-xl font-semibold mb-2">{stat.label}</p>
                <p className="text-gray-400">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section with Staggered Cards */}
      <section className="py-20 bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-50 hearsay"></div>
        <div className="container mx-auto px-4">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-400"
          >
            What SkillSpark Offers
          </motion.h2>
          <div className="space-y-12">
            {[
              {
                title: 'Free Curated Resources',
                description: 'Top-tier tutorials and tools from trusted sources like freeCodeCamp and MDN.',
                icon: '📚',
                align: 'left',
              },
              {
                title: 'Guided Roadmaps',
                description: 'Clear, step-by-step paths to master any tech stack, from beginner to pro.',
                icon: '🗺️',
                align: 'right',
              },
              {
                title: 'Vibrant Community',
                description: 'Connect with students worldwide to share, learn, and grow together.',
                icon: '🤝',
                align: 'left',
              },
              {
                title: 'Career Insights',
                description: 'Explore salaries, roles, and trends to plan your tech future.',
                icon: '💼',
                align: 'right',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: feature.align === 'left' ? -50 : 50 },
                  visible: { opacity: 1, x: 0, transition: { delay: index * 0.2, duration: 0.6 } },
                }}
                whileHover="hover"
                // Removed duplicate variants attribute
                className={`p-6 bg-gray-800/50 rounded-xl border border-teal-400 max-w-lg ${feature.align === 'left' ? 'mr-auto' : 'ml-auto'
                  }`}
              >
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-semibold text-teal-400 mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20 bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-400">
            Student Success Stories
          </h2>
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStack}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="p-6 bg-gray-700/50 rounded-xl max-w-lg mx-auto text-center"
              >
                <p className="text-gray-300 italic mb-4">
                  "{currentStack === 0
                    ? 'SkillSpark’s roadmaps made learning web development so clear—I built my first app in 2 months!'
                    : currentStack === 1
                      ? 'The AI resources were beginner-friendly and got me started on my machine learning journey.'
                      : 'Game development felt daunting, but SkillSpark’s tutorials made it fun and achievable!'}"
                </p>
                <p className="font-semibold text-teal-400">
                  {currentStack === 0 ? 'Sara M.' : currentStack === 1 ? 'Arjun P.' : 'Srinu M.'}
                </p>
                <p className="text-gray-400 text-sm">
                  {currentStack === 0 ? 'Aspiring Developer' : currentStack === 1 ? 'CS Student' : 'Game Dev Enthusiast'}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* CTA Section with Parallax */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20 bg-gray-900 relative"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/circuit-board.png')",
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
        }}
      >

        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-400">
            Ready to Spark Your Tech Career?
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-8 text-gray-300">
            Join SkillSpark and start building skills for a future in tech. Your journey begins now!
          </p>
          <motion.div
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255,149,0,0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              to="/services"
              className="bg-black text-orange-400 font-semibold py-3 px-8 rounded-full border-2 border-orange-400 hover:bg-orange-400 hover:text-black transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
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

export default Home;