import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';

const PdfSection = ({ tech }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Learning PDFs for {tech.title}</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <FileText className="w-10 h-10 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Downloadable Resources</h3>
            <p className="text-gray-600">
              This section will contain PDF resources, cheat sheets, and reference guides for {tech.title}.
              Content will be added soon. Please check back later.
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tech.pdfs?.map((pdf, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <h3 className="font-bold truncate" title={pdf.title}>{pdf.title}</h3>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-4">{pdf.description}</p>
              <div className="flex justify-between">
                <span className="text-xs text-gray-500">{pdf.size || '2.3 MB'}</span>
                <a 
                  href={pdf.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline flex items-center text-sm"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </a>
              </div>
            </div>
          </div>
        )) || Array(6).fill(0).map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <h3 className="font-bold truncate">PDF Resource {index + 1}</h3>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-4">
                Placeholder for Google Drive PDF links. These will be added later.
              </p>
              <div className="flex justify-between">
                <span className="text-xs text-gray-500">Coming Soon</span>
                <button 
                  disabled
                  className="text-gray-400 flex items-center text-sm cursor-not-allowed"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfSection;