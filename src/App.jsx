import Dashboard from "./components/dashboard/Dashboard";
import Navigation from "./components/app/Navigation";

function App() {
  return (
    <div className="app">
      <Navigation>
        <Dashboard />
      </Navigation>
    </div>
  );
}

export default App;
