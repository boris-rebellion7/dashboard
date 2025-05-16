import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from "./Button";

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
    <div className="w-full bg-white shadow-sm section-spacing !py-3">
      <div className="flex items-center justify-between">
        {/* Left side - Page Title */}
        <h1 className="text-16 font-bold font-manropeBold">
          {pageName}
        </h1>

        {/* Right side - Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-gray-500 hover:text-gray-700">
            <Link to="/">
              <img src="/icons/house.svg" alt="Home" />
            </Link>
          </span>

          {showDetail && (
            <>
              <span className="text-black">/</span>

              <span className="px-2 py-1 rounded">
                <Button
                  text={pageName}
                  theme='lavander'
                />
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;