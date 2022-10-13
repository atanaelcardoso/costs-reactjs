import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'

import Container from './components/layout/Container'
import Navbar from './component/layout/Navbar'
import Footer from './component/layout/Footer'



function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Container customClass="min-height">
       <Router exact path="/">
       <Home/>
       </Router>
        <Router path="/projects">
       <Projects/>
       </Router>
         <Router path="/company">
       <Company/>
       </Router>
         <Router path="/contact">
       <Contact/>
         <Router path="/newproject">
       <NewProject/>
       </Router>
       </Router>
     </Container>
    </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
