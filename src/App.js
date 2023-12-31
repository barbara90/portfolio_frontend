import './App.css';
import {LandingPage} from './pages/landingPageComponent';
import {ContactForm} from './pages/contactPageComponent';
import {ResumePage} from './pages/resumePageComponent';

function App() {
  return (
    <div className="App">
      <LandingPage/>
      <ResumePage/>
      <ContactForm/>
    </div>
  );
}

export default App;
