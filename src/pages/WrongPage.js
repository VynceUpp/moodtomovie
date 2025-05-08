import React from 'react';
import { AlertTriangle, Book, ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const WrongPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-red-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 bg-opacity-70 backdrop-blur-sm rounded-xl p-8 shadow-2xl max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-red-500 bg-opacity-20 p-4 rounded-full">
            <AlertTriangle size={64} className="text-red-500" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-2">Oops! Wrong Turn</h1>
        <div className="h-1 w-16 bg-red-500 mx-auto mb-6"></div>
        
        <p className="text-gray-200 text-lg mb-2">
          Hey there, looks like you've wandered to the wrong page.
        </p>
        
        <p className="text-gray-300 mb-6">
          The content you're looking for might be found elsewhere.
          Perhaps you were looking for this?
        </p>
        
        <a 
          href="https://www.bible.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg mb-8 mx-auto w-full max-w-xs transition transform hover:scale-105 active:scale-95"
        >
          <Book size={20} />
          <span className="font-medium">Visit</span>
          <ExternalLink size={16} />
        </a>
        
        <div className="border-t border-gray-700 pt-6 mt-2">
          <Link
            to="/"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition font-medium"
          >
            <ArrowLeft size={18} className="mr-2" />
            Return to Home Page
          </Link>
        </div>
        
        <p className="text-gray-400 mt-8 text-sm">
          Mood2Movie is a family-friendly movie recommendation service.
        </p>
      </div>
    </div>
  );
};

export default WrongPage;