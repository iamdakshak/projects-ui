import './App.css';
import Project from './components/Project';
import Dashboard from './containers/Dashboard/Dashboard';
import MyProject from './containers/MyProject/MyProject';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <MyProject />
    </div>
  );
}

export default App;
