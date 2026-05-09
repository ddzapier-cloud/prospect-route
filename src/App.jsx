import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/config'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Tasks from './pages/Tasks'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import './App.css'
import UserDetail from './pages/UserDetail'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-slate-400 text-sm">Loading...</p>
      </div>
    )
  }

  return (
    <BrowserRouter>
      {user ? (
        <div className="flex">
          <Navbar user={user} />
          {/* Main content - left margin equal to sidebar width */}
          <div className="flex-1 min-h-screen bg-slate-50" style={{ marginLeft: '240px' }}>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard user={user} />} />
              <Route path="/users/:id" element={<UserDetail />} />
              <Route path="/users" element={<Users />} />
              <Route path="/tasks" element={<Tasks user={user} />} />
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" />} />
          {/* <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      )}
    </BrowserRouter>
  )
}

export default App