import React from 'react';
import About from './components/About/about';
import ContactModal from './components/ContactModal/contactModal';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Nav from './components/Navigation/nav';
import Portfolio from './components/Portfolio/portfolio';
import ProjectCard from './components/ProjectCard/projectCard'
import Resume from './components/Resume/resume';
import './index.css'


function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <main>
        <About></About>
        <Portfolio>
          <ProjectCard></ProjectCard>
        </Portfolio>
        <Resume></Resume>
        <ContactModal></ContactModal>
      </main>
        <Footer></Footer>
    </div>
  );
}

export default App;
