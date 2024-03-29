import { Route } from 'react-router-dom';
import About from './components/about';
import ContactMe from './components/contactMe';
import Education from './components/eduction';
import Nav from './components/nav';
import Proyects from './components/proyects';
import Technologies from './components/technologies';
import "./styles/index.scss"
import WorkingExperiencie from './components/workingExperiencie';

function App() {
  return (
    <>
    <About/>
    <Education/>
    <WorkingExperiencie/>
    <Proyects/>
    <Technologies/>
    <ContactMe/>
    <Nav/>
    </>
  );
}

export default App;
