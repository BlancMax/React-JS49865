import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const greeting ="Bienvenidos a E-Commerce..."

  return (
    <>
    <navBar/>
    <ItemListContainer mensaje={greeting}/>
    </>
  )
}

export default App
