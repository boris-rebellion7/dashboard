// App.tsx
import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SmoothScroll from "./components/helper/SmoothScroll";
import Dashboard from "./components/dashboard/Dashboard";
import Detail from "./components/detail/Detail";
import Edit from "./components/edit/Edit";
import Navigation from "./components/app/Navigation";

const App: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  return (
    <Navigation>
      <div 
        ref={scrollContainerRef}
        className="routes-container overflow-auto h-full"
      >
        <SmoothScroll containerRef={scrollContainerRef} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </div>
    </Navigation>
  );
};

export default App;
