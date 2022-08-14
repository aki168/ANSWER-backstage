import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Admin from './pages/Admin'
import Main from './pages/Main'


export default function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row">
          <Navbar />
          <main className="col-9">
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/admin" element={<Admin />}></Route>
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}