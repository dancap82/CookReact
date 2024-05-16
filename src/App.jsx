import './App.css'
import NavBar from './components/NavBar'
import Hero from "./components/Hero"
import Featured from "./components/Featured"
import DisplayWhole from './components/DisplayWhole'
import { useState } from 'react'
import { ContentfulClient, ContentfulProvider } from 'react-contentful'
import { Routes, Route } from 'react-router-dom'

function App() {

  const contentfulClient = new ContentfulClient({
    accessToken: import.meta.env.VITE_APP_CONTENTFUL_ACCESS_TOKEN,
    space: import.meta.env.VITE_APP_CONTENTFUL_SPACE_ID
  });

  const [contentful, setContentful] = useState([]);

  return (
    <div>
      <ContentfulProvider client={contentfulClient}>
        <NavBar />
        <Hero />
        <Featured />
        <DisplayWhole />
      </ContentfulProvider>
    </div>
  )
}



export default App;
