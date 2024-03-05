import React, { useState } from 'react';
import { Routes, Route,  } from 'react-router-dom'
import { AboutPage, HomePage, LoginPage, SignUpPage } from './pages'
import { Navbar, Footer } from './components'
import { OnboardingPage } from './pages'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleSignUp = (userData) => {
    // Here you can implement your signup logic, such as making an API call to register the user
    // For demo purposes, we'll just set the user data and log them in automatically

    if (!userData.email && !userData.password) {
      console.log(userData);
      alert('Enter a valid email or password!');
    } else {
      console.log(userData);
      setUser(userData);
      setIsLoggedIn(true);
      alert('User signed up successfully!');
    }
  };

  const handleLogin = (userData) => {
    // Here you can implement your login logic, such as making an API call to authenticate the user
    // For demo purposes, we'll just check if the user exists and log them in
    if (userData.email === 'ayo@gmail.com' && userData.password === 'password') {
      console.log(userData);
      setUser(userData);
      setIsLoggedIn(true);
      alert('User logged in successfully!');
    } else {
      console.log(userData);
      alert('Invalid username or password!');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <div className="font-inter">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} onLogout={handleLogout} user={user} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/login' element={<LoginPage onLogin={handleLogin} />} />
        <Route path='/sign-up' element={<SignUpPage onSignUp={handleSignUp} />} />
        <Route path='/onboarding' element={<OnboardingPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
