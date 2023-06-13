// import logo from './logo.svg';
import './App.css';
import { SearchProvider } from './searchContext';
import HomePage from './components/homepage';


function App() {
  return (
    <div className="App">
      <SearchProvider>
        <HomePage/>
      </SearchProvider>
    </div>
  );
}

export default App;