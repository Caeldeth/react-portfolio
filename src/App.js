import React, { useState } from 'react';
import About from './components/About/about';
import ContactModal from './components/ContactModal/contactModal';
import Footer from './components/Footer/footer';
import Nav from './components/Navigation/nav';
import Portfolio from './components/Portfolio/portfolio';
// import ProjectCard from './components/ProjectCard/projectCard';
import Resume from './components/Resume/resume';
import './index.css'


function App(props) {
  const navElements = [
    {
      name: 'About'
    },
    {
      name: 'Portfolio'
    },
    {
      name: 'Contact'
    },
    {
      name: 'Resume'
    }
  ]

  const [currentNav, setCurrentNav] = useState(navElements[0])

  let render = ''

  switch (currentNav.name) {
    case 'About':
      render = <About/>
      break;
    case 'Portfolio':
      render = <Portfolio/>
      break;
    case 'Contact':
      render = <ContactModal/>
      break;
    case 'Resume':
      render = <Resume/>
      break;
      default:
        render = <About/>
  }

  return (
    <div style={{ background: "#202020" }}>
      <Nav
        navElements={navElements}
        currentNav={currentNav}
        setCurrentNav={setCurrentNav}
      ></Nav>
      <main>
        {render}
      </main>
        <Footer></Footer>
    </div>
  );
}

export default App;
