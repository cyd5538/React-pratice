import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './components/main'
import AddPage from './components/addPage'
import MinusPage from './components/minusPage'

const Router = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/addpage" element={<AddPage />}/>
          <Route path="/minuspage" element={<MinusPage />}/>
      </Routes>
    </>
  )
}

export default Router
