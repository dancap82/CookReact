import './App.css'

import { ContentfulClient,ContentfulProvider } from 'react-contentful'
import {useState, useEffect} from "react"
import { Routes, Route } from 'react-router-dom';
//files: 
import SingleRecipePage from './components/SingleRecipePage'
import Layout from "./components/Layout"
import Homepage from './components/Homepage'

function App() {

 const contentfulClient= new ContentfulClient({
     space: import.meta.env.VITE_APP_SPACE_ID,
     accessToken: import.meta.env.VITE_APP_ACCES_TOKEN
 })
 

 const[contentfulRecipes, setContentfulRecipes]=useState([])
 
  return (
    <div>
      <ContentfulProvider client={contentfulClient}>
        <Routes>
        <Route
          path='/'
          element={
            <Layout
              recipes={contentfulRecipes}
              setRecipes={setContentfulRecipes}
            />
          }
        >
          <Route path='/' element={<Homepage recipes={contentfulRecipes} />} />
          <Route path='/SingleRecipePage' element={<SingleRecipePage />} />
        </Route>
        </Routes>
      </ContentfulProvider>
    </div>
  )
}



export default App;
