import './App.css'
import NavBar from './components/NavBar'
import Hero from "./components/Hero"
import Featured from "./components/Featured"
import DisplayWhole from './components/DisplayWhole'
import { ContentfulClient, ContentfulProvider } from 'react-contentful'

function App() {
  const client = new ContentfulClient({
    accessToken: import.meta.env.VITE_APP_CONTENTFUL_ACCESS_TOKEN,
    space: import.meta.env.VITE_APP_CONTENTFUL_SPACE_ID
  })

  return (
    <div>
      <NavBar />
      <Hero />
      <Featured />
      <DisplayWhole />
    </div>
  )
}



export default App;
