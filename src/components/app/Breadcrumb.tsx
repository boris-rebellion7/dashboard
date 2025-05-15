import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  let pageName = "Dashboard";
  let detailUrl = "/";
  let showDetail = false;

  if (path === "/detail") {
    pageName = "Product Detail";
    detailUrl = "/detail" + location.search;
    showDetail = true;
  } else if (path === "/edit") {
    pageName = "Edit Product";
    detailUrl = "/edit" + location.search;
    showDetail = true;
  } else {
    pageName = "Dashboard";
    showDetail = false;
  }

  return (
    <div className="w-full bg-white shadow-sm py-4 px-6">
      <div className="flex items-center justify-between">
        {/* Left side - Page Title */}
        <h1 className="text-gray-800 font-medium">
          {pageName}
        </h1>
        
        {/* Right side - Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-gray-500 hover:text-gray-700">
            <Link to="/">
              <svg 
                className="w-4 h-4 inline-block" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                />
              </svg>
            </Link>
          </span>
          
          {showDetail && (
            <>
              <span className="text-gray-400">/</span>
              <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded">
                <Link to={detailUrl}>
                  {pageName}
                </Link>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;