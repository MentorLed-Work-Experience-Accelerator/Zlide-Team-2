import { Routes, Route } from 'react-router-dom'
import { AboutPage, HomePage, LoginPage, SignUpPage } from './pages'
import { Navbar, Footer } from './components'

function App() {

  return (
    <div className="font-inter">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
