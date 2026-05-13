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
    <div className="fixed top-0 left-0 h-screen w-60 bg-black border-r border-zinc-800 flex flex-col justify-between">

      {/* Top */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-zinc-800">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-yellow-400 text-black font-bold text-[16px] shrink-0">
            P
          </div>

          <div>
            <p className="text-white text-[15px] font-bold">
              ProspectRoute
            </p>
            <p className="text-zinc-400 text-[11px]">
              Management App
            </p>
          </div>
        </div>

        {/* Nav Links */}
        <div className="px-3 mt-4 flex flex-col gap-2">
          {links.map(link => {
            const isActive = location.pathname === link.to

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-3 no-underline transition-all px-3.5 py-2.5] rounded-xl text-[14px] ${
                  isActive
                    ? 'bg-yellow-400 text-black font-semibold'
                    : 'text-zinc-300 font-medium hover:bg-zinc-900 hover:text-yellow-400'
                }`}
              >
                <span className="text-[17px]">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            )
          })}
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 mx-4 my-4"></div>
      </div>

      {/* Bottom User */}
      <div className="px-4 pb-5">
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-900 border border-zinc-800">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-yellow-400 text-black font-bold text-[13px] shrink-0">
            {user?.email?.[0]?.toUpperCase()}
          </div>

          <div className="overflow-hidden flex-1">
            <p className="text-white text-[12px] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
              {user?.email}
            </p>
            <p className="text-green-500 text-[11px] text-left">
              ● Online
            </p>
          </div>

          <button
            onClick={handleLogout}
            title="Logout"
            className="shrink-0 border-0 cursor-pointer rounded-lg px-2 py-1 text-xs font-semibold transition bg-yellow-400 text-black hover:bg-yellow-300"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar