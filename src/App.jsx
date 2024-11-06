import React from 'react'
import About from './pages/About'
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import AdditionDetails from './pages/AdditionDetails';
import Product from './pages/Product';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<About/>} />
      <Route path='/additonalDetails' element={<AdditionDetails/>} />
      <Route path='/product/:id' element={<Product/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
