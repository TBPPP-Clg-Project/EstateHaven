import React from 'react'
import { Header } from './components/Header'
import Project from './components/Project'  // Add this import

const App = () => {
  return (
    <div>
      <Header/>
      <Project/>  {/* Add this component */}
    </div>
  )
}

export default App