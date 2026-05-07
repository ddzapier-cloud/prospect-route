import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'
import { Link } from 'react-router-dom'

function Login({ onClose }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    if (!email || !password) { setError('Please fill all fields'); return }
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      if (onClose) onClose() // ✅ login ke baad modal band
    } catch {
      setError('Invalid email or password')
    }
    setLoading(false)
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-10 relative">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: '16px', right: '16px',
          background: '#f1f5f9', border: 'none', borderRadius: '50%',
          width: '32px', height: '32px', cursor: 'pointer',
          fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}
      >
        ✕
      </button>

      <h2 className="text-3xl font-bold text-slate-800 mb-2">Welcome back</h2>
      <p className="text-slate-500 mb-8 text-sm">Login to your account</p>

      {error && (
        <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg mb-4">{error}</div>
      )}

      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-slate-900 hover:bg-slate-700 text-white py-3 rounded-xl font-medium transition disabled:opacity-50"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <p className="text-center text-sm text-slate-500 mt-6">
        Don't have account?{' '}
        <Link
          to="/signup"
          onClick={onClose}
          className="text-slate-800 font-semibold hover:underline"
        >
          Sign up
        </Link>
      </p>
    </div>
  )
}

export default Login