
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import { Home } from './component/home'
import { Navbar } from './component/navbar'

function App() {
 
  return (

    <div>
      
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
