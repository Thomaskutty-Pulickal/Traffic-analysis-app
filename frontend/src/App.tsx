import Dashboard from './containers/Dashboard';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Live Traffic Analytics</h1>
      <Dashboard />
    </div>
  );
};

export default App;
