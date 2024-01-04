import Header from './components/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import './App.css'
import Companies from './components/Companies/Companies.jsx'
import Residencies from './components/Residencies/Residencies.jsx'
import Value from './components/Value/Value.jsx'
import Contact from './components/Contact/Contact.jsx'
import GetStarted from './components/GetStarted/GetStarted.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <div className='App'>
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <div className="app-color">
        <Companies />
        <Residencies />
        <Value />
        <Contact />
        <GetStarted />
        <Footer />
      </div>
    </div>
  )
}

export default App  