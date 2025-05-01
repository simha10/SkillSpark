import React from 'react';
import { Link } from 'react-router-dom';
import {
  DollarSign,
  Briefcase,
  TrendingUp,
  BookOpen
} from 'lucide-react';
import { techStacks } from '../data/techStacks';
import Footer from './Footer';

const Services = () => {
  return (
    <>
      {/* Tech Stacks Section */}
      <div className="py-16 bg-gradient-to-r from-blue-900 to-blue-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-800">Choose Your Tech Stack</h2>
            <p className="mt-4 text-3xl text-gray-50">Comprehensive learning paths for in-demand technologies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStacks.map((stack, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="w-full h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={stack.image}
                    alt={stack.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{stack.title}</h3>

                  {/* Description */}
                  <div className="mb-3">
                    <p className="text-gray-600">{stack.description}</p>
                  </div>

                  {/* Salary */}
                  <div className="flex items-center mb-3 text-emerald-700 border-2 border-emerald-100 bg-emerald-50 p-2 rounded-md">
                    <DollarSign className="w-4 h-4 mr-2 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Average Salary:</span> {stack.salary}
                    </div>
                  </div>

                  {/* Job Roles */}
                  <div className="mb-3 border-2 border-emerald-100 bg-emerald-50 p-2 rounded-md">
                    <div className="flex items-center text-indigo-700 mb-1">
                      <Briefcase className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="font-medium">Job Roles:</span>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-6">
                      {stack.roles.map((role, idx) => (
                        <span key={idx} className="inline-block bg-indigo-50 text-indigo-700 px-2 py-1 rounded-md text-sm">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Future Scope */}
                  <div className="mb-4">
                    <div className="flex items-start text-purple-700 border-2 border-emerald-100 bg-emerald-50 p-2 rounded-md">
                      <TrendingUp className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Future Scope:</span>
                        <p className="text-gray-600 text-sm mt-1">{stack.futureScope}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Start Learning Button */}
                  <Link 
                    to={`/learn/${stack.id}`}
                    className="w-full text-center py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    Start Learning
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
};

export default Services;