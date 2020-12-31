import './App.css';
import Header from './components/Header';
import Text from './components/Text';
import {BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <Router>
      <Header/>
      <Text/>
    </Router>
  );
}

export default App;
