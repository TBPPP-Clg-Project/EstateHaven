import React from 'react'
import { Header } from './components/Header'
import Project from './components/Project'  // Add this import
import Middle from './components/Middle'
import Footer from './components/Footer'
import About from './components/About'

const App = () => {
  return (
    <div>
      <Header/>
      <Middle/>
      <Project/>  {/* Add this component */}
      <About/>
      <Footer/>
    </div>
  )
}

export default App