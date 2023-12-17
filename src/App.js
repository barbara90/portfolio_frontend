import logo from './logo.svg';
import './App.css';
import {LandingPage} from './pages/landingPageComponent';
import {ContactForm} from './pages/contactPageComponent';

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <ContactForm/>
    </div>
  );
}

export default App;
