import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'


function App() {
  return (
    <div className='h-screen w-screen bg-home bg-center bg-cover'>
      <div className='h-[7vh] w-full sticky top-0 z-40'>
        <NavBar></NavBar>
      </div>
      <div className='h-[93vh] w-full  '>
        <Home></Home>
      </div>
    </div>
  )
}

export default App