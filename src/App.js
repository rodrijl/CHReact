import './App.css';
import Header from './components/Header';
import Text from './components/Text';
import Count from './components/Count'
import {BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <Router>
      <Header/>
      <Text/>
      <Count/>
    </Router>
  );
}

export default App;
