
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './page/About'
import Home from './page/Home'
import Contact from './page/Contact'
import Service from './page/Service'
import Login from './page/Login'
import Register from './page/Register'
import Navbar from './Components/Navbar'
import Logout from './page/Logout'
import Admin from './page/Admin'

function App() {

  return (
    <div className='font-sans'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/service' element={<Service/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout/> } />
          <Route path='/register' element={<Register/>} />
          <Route path='/admin' element={<Admin />} >
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
