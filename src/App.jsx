import react, { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import UseCity from './Components/Hooks/UseCity'
import Regions from './Components/Pages/Regions'
import SearchResults from './Components/Pages/SearchResults'
import Routes from './Routes/Routes'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
        <Routes />
    </div>
  )
}

export default App
