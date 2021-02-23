import './App.css';
import Dashboard from './containers/Dashboard/Dashboard';
import MyProject from './containers/MyProject/MyProject';
import Header from './containers/Header/Header';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <MyProject />
      <Header />
    </div>
  );
}

export default App;
