import React from 'react';

const VideoSection = ({ tech }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Video Lectures for {tech.title}</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {tech.videos?.map((video, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-video w-full">
              <iframe 
                width="100%" 
                height="100%" 
                src={video.embedUrl} 
                title={video.title}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{video.title}</h3>
              <p className="text-gray-600 text-sm">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Additional Resources</h3>
        <ul className="space-y-2">
          {tech.additionalVideoResources?.map((resource, index) => (
            <li key={index}>
              <a 
                href={resource.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline flex items-center"
              >
                <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-2">
                  {index + 1}
                </span>
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoSection;