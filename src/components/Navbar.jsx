import { Link, useLocation, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/config'

function Navbar({ user }) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = async () => {
    await signOut(auth)
    navigate('/')
  }

  const links = [
    { to: '/dashboard', label: 'Dashboard', icon: '🏠' },
    { to: '/users', label: 'Users', icon: '👥' },
    { to: '/tasks', label: 'Tasks', icon: '✅' },
  ]

  return (
    <div
      className="fixed top-0 left-0 h-screen flex flex-col justify-between"
      style={{
        width: '240px',
        background: '#ffffff',
        borderRight: '1px solid #e2e8f0',
      }}
    >
      {/* Top */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5" style={{ borderBottom: '1px solid #f1f5f9' }}>
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0"
            style={{ background: '#6366f1', fontSize: '16px' }}
          >
            P
          </div>
          <div>
            <p style={{ color: '#0f172a', fontSize: '15px', fontWeight: '700' }}>ProspectRoute</p>
            <p style={{ color: '#94a3b8', fontSize: '11px' }}>Management App</p>
          </div>
        </div>

        {/* Nav Links */}
        <div className="px-3 mt-4 flex flex-col gap-1">
          {links.map(link => {
            const isActive = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-3 no-underline transition-all"
                style={{
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: isActive ? '#6366f1' : 'transparent',
                  color: isActive ? '#ffffff' : '#64748b',
                  fontSize: '14px',
                  fontWeight: isActive ? '600' : '500',
                }}
              >
                <span style={{ fontSize: '17px' }}>{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            )
          })}
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #f1f5f9', margin: '16px 16px' }}></div>
      </div>

      {/* Bottom User */}
      <div className="px-4 pb-5">
        <div
          className="flex items-center gap-3 p-3 rounded-2xl"
          style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center font-bold flex-shrink-0"
            style={{ background: '#6366f1', color: 'white', fontSize: '13px' }}
          >
            {user.email[0].toUpperCase()}
          </div>
          <div style={{ overflow: 'hidden', flex: 1 }}>
            <p style={{ color: '#0f172a', fontSize: '12px', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {user.email}
            </p>
            <p style={{ color: '#22c55e', fontSize: '11px' }}>● Online</p>
          </div>
          <button
            onClick={handleLogout}
            title="Logout"
            className="flex-shrink-0 border-0 cursor-pointer rounded-lg px-2 py-1 text-xs font-semibold transition"
            style={{ background: '#fee2e2', color: '#ef4444' }}
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar