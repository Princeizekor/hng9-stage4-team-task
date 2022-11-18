import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Copy from './components/Copy';
import Footer from './components/Footer';
import Header from './components/Header';
import MidContent from './components/MidContent';
import What from './components/What';
import Who from './components/Who';
import Navbar from './Navbar';
function App() {
  return (
    <Router>
     
     <div className="App">
        <Navbar />
        <div className="component">
          <Route exact path="/">
            <Header />
            <Who />
            <MidContent />
            <What />
            <Footer />
            <Copy />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
