import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header
        title="My Portfolio"
        subtitle="Welcome to my React Website"
      />

      <Navbar />

      <About
        name="Bhavya Durgani"
        college="Charusat University"
      />

      <Skills
        skill1="HTML"
        skill2="CSS"
        skill3="JavaScript"
        skill4="React"
      />

      <Footer
        company="My Portfolio"
      />
    </>
  )
}

export default App
