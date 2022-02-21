import './App.scss';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Features from './components/Features';
import Offer from './components/Offer';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
     <Header />
     <Features />
     <About />
     <Offer />
     <Contact />
    </div>
  );
}

export default App;
