import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Tab } from './components/Tab'
import PropertyCard from './components/PropertyCard'
import PropertyLists from './components/PropertyLists'

function App() {

  return (
    <>
    <Header/>
    <Tab/>
    <PropertyLists/>
    </>
  )
}

export default App
