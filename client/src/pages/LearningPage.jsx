import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Video, Map, FileText } from 'lucide-react';
import { techStacks } from '../data/techStacks';
import VideoSection from '../components/VideoSection';
import RoadmapSection from '../components/RoadmapSection';
import PdfSection from '../components/PdfSection';

const LearningPage = () => {
  const { techId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('videos');
  
  const tech = techStacks.find(t => t.id === techId);
  
  if (!tech) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
          <button 
            className="bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2" size={16} />
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Hero Section */}
      <div 
        className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.85), rgba(30, 64, 175, 0.9)), url(${tech.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate('/')}
            className="mb-8 bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center"
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Courses
          </button>
          
          <h1 className="text-4xl font-bold mb-4">{tech.title}</h1>
          <p className="text-xl mb-6 max-w-3xl">{tech.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-white/20 px-4 py-2 rounded-lg">
              <p className="text-sm font-medium">Average Salary</p>
              <p className="text-lg font-bold">{tech.salary}</p>
            </div>
            
            <div className="bg-white/20 px-4 py-2 rounded-lg">
              <p className="text-sm font-medium">Learning Time</p>
              <p className="text-lg font-bold">{tech.learningTime || '3-6 months'}</p>
            </div>
            
            <div className="bg-white/20 px-4 py-2 rounded-lg">
              <p className="text-sm font-medium">Difficulty</p>
              <p className="text-lg font-bold">{tech.difficulty || 'Intermediate'}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto">
            <button
              className={`py-4 px-6 border-b-2 font-medium text-sm flex items-center whitespace-nowrap ${
                activeTab === 'videos' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('videos')}
            >
              <Video className="mr-2" size={18} />
              Video Lectures
            </button>
            
            <button
              className={`py-4 px-6 border-b-2 font-medium text-sm flex items-center whitespace-nowrap ${
                activeTab === 'roadmap' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('roadmap')}
            >
              <Map className="mr-2" size={18} />
              Learning Roadmap
            </button>
            
            <button
              className={`py-4 px-6 border-b-2 font-medium text-sm flex items-center whitespace-nowrap ${
                activeTab === 'pdfs' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('pdfs')}
            >
              <FileText className="mr-2" size={18} />
              Learning PDFs
            </button>
          </div>
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'videos' && <VideoSection tech={tech} />}
        {activeTab === 'roadmap' && <RoadmapSection tech={tech} />}
        {activeTab === 'pdfs' && <PdfSection tech={tech} />}
      </div>
    </div>
  );
};

export default LearningPage;