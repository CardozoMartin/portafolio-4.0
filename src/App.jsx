import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Common/Navbar'
import ContactForm from './components/Contact/ContactForm'
import ProjectDetailPage from './pages/ProjectDetailPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route element={<HomePage />} path='/'/>
            <Route element={<ContactForm />} path='/contact'/>
            {/* Ruta corregida */}
            <Route element={<ProjectDetailPage />} path='/projectDetail/:projectId'/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App