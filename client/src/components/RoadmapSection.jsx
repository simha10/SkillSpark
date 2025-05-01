import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const RoadmapSection = ({ tech }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Learning Roadmap for {tech.title}</h2>
      
      <div className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">How to Use This Roadmap</h3>
          <p className="text-gray-600 mb-4">
            This roadmap provides a structured learning path for mastering {tech.title}. 
            Follow these steps in sequence for the most effective learning experience.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-sm text-yellow-700">
              <strong>Pro Tip:</strong> Don't try to learn everything at once. Focus on one section at a time
              and make sure you practice with real projects before moving on.
            </p>
          </div>
        </div>
      </div>
      
      {tech.roadmap?.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8">
          <div className="flex items-center mb-4">
            <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
              {sectionIndex + 1}
            </div>
            <h3 className="text-xl font-semibold">{section.title}</h3>
          </div>
          
          <div className="pl-11">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
              <p className="text-gray-600 mb-4">{section.description}</p>
              
              <h4 className="font-medium text-lg mb-3">Key Topics:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                {section.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
              
              <h4 className="font-medium text-lg mb-3">Recommended Resources:</h4>
              <ul className="space-y-3">
                {section.resources.map((resource, resourceIndex) => (
                  <li key={resourceIndex} className="bg-gray-50 p-3 rounded-lg">
                    <a 
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {resource.title}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Next Steps After Completing This Roadmap</h3>
        <ul className="space-y-2">
          {tech.nextSteps?.map((step, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                {index + 1}
              </div>
              <span>{step}</span>
            </li>
          )) || (
            <>
              <li className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  1
                </div>
                <span>Build a portfolio of projects to showcase your skills</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  2
                </div>
                <span>Join communities and contribute to open source projects</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  3
                </div>
                <span>Prepare for technical interviews and job applications</span>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RoadmapSection;