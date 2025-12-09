import { useState } from 'react'
import { BrowserRouter,Routes ,Route } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import WorkWithMe from './WorkWithMe'
import Meeters from './Meeters'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
     <Route path='/projects'element={<Project/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/work' element={<WorkWithMe/>}/>
      <Route path='/meeters' element={<Meeters/>}/>



     </Routes>
     </BrowserRouter>
      </div>
     
    </>
  )
}

export default App
