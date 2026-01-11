import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Common/Navbar'
import ContactForm from './components/Contact/ContactForm'
import ProjectDetailPage from './pages/ProjectDetailPage'
import AllProjectsPage from './pages/AllProjectsPage'

function App() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<HomePage />} path='/'/>
            <Route element={<ContactForm />} path='/contact'/>
            <Route element={<AllProjectsPage />} path='/all-projects'/>
            <Route element={<ProjectDetailPage />} path='/projectDetail/:projectId'/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App