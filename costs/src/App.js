import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Router path="/" element={<Home />} />
          <Router path="/projects" element={<Projects />} />
          <Router path="/company" element={<Company />} />
          <Router path="/contact" element={<Contact />} />
          <Router path="/newproject" element={<NewProject />} />
          <Router path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
