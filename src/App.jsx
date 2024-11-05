import React from 'react'
import About from './pages/About'
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import AdditionDetails from './pages/AdditionDetails';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<About/>} />
      <Route path='/additonalDetails' element={<AdditionDetails/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
