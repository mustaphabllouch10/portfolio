import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import ErrorBoundary from './components/ErrorBoundary'
import PageTransition from './components/PageTransition'

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <MainLayout>
          <Routes>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
            <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </MainLayout>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
