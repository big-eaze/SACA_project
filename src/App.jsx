import AboutPage from './Pages/About'
import HomePage from './Pages/Home'
import { Route, Router, Routes } from 'react-router-dom'
import ProgramsPage from './Pages/Program'
import ResourcesPage from './Pages/Resources'
import ContactPage from './Pages/Contact'
import BlogPage from './Pages/Blog'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='about' element={<AboutPage />} />
      <Route path='/programs' element={<ProgramsPage />} />
      <Route path='/resources' element={<ResourcesPage />} />
      <Route path='/contact' element={<ContactPage />} />
      {/*<Route path='/blog' element={< BlogPage />} />*/}
    </Routes>
  )
}

export default App
