import { Routes, Route } from 'react-router-dom'
import { AboutPage, HomePage } from './pages'
import { Navbar, Footer } from './components'

function App() {

  return (
    <div className="text-center">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
