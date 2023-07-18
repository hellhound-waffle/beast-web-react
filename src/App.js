import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Skills from './pages/skills/Skills';
import Contact from './pages/contact/Contact';
import Project from './pages/project/Project';
import './styles/main.css';
import ScrollToTop from './utilities/scrollToTop';


function App() {
  return (
    <div className="App">

      <Router>
        <ScrollToTop />
        <NavBar />
          <Routes>
            <Route path='/beast-web-react/' element={<Home />} />
            <Route path='/beast-web-react/project/:id' element={<Project />} />
            <Route path='/beast-web-react/skills' element={<Skills />} />
            <Route path='/beast-web-react/contacts' element={<Contact />} />
          </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;



// jelly bean cock & ass