// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Detail from "./components/detail/Detail";
import Edit from "./components/edit/Edit";
import Navigation from "./components/app/Navigation";

const App: React.FC = () => {
  return (
    <div className="app">
      <Navigation>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Navigation>
    </div>
  );
};

export default App;
