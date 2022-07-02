import react, { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import GetWeather from './Services/GetWeather'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
    </div>
  )
}

export default App
