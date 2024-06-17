import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navvbar from './Navbar/Navvbar'
// import Textform from './Navbar/Textform'
import './App.css'
import Textform from './Form/Textform'
import Navbar from './Form/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Landingpage from './Landing/Landingpage'
import Cards from './Form/Cards'
import Todo from './Form/Todo'
function App() {

  return (

    <>
    {/* <Navvbar title_nav1="Features" title_nav2="Resources" title_nav3="Solutions" title_nav4="Enterprising" title_nav5="Pricing"></Navvbar> */}

    {/* <Landingpage></Landingpage> */}
    {/* <Textform information="Enter the information to analyze"></Textform> */}
    {/* <Textform></Textform> */}
    {/* <Fazool></Fazool> */}
    {/* <Cards></Cards> */}
    <Todo></Todo>

   





  
    

     
    </>
  )
}

export default App
