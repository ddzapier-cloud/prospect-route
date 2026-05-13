import { Link } from 'react-router-dom'

function Dashboard({ user }) {
  const stats = [
    { label: 'Total Users', value: '20', icon: '👥' },
    { label: 'Active Tasks', value: 'My Tasks', icon: '✅' },
    { label: 'Status', value: 'Active', icon: '🟢' },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      <div className="max-w-300 mx-auto px-8 py-16 relative">
        {/* Hero Content */}
        <div className="relative z-10 pt-24 mb-20">
          <h3 className="text-[64px] md:text-[90px] font-medium leading-none mb-6">
            Welcome
            <span className="text-yellow-400 font-semibold"> Back!</span>
          </h3>

          <p className="text-slate-300 max-w-xl text-base text-center mx-auto mb-7.5">
            Manage your users, tasks and dashboard activity from one clean place.
          </p>

          <div className="inline-flex items-center gap-2 bg-white text-black rounded-full px-5 py-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-sm font-medium">
              {user?.email}
            </span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-zinc-400 text-sm font-medium">
                  {stat.label}
                </span>
                <span className="text-2xl">{stat.icon}</span>
              </div>

              <p className="text-yellow-400 text-3xl font-black">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Module Cards */}
        <h2 className="relative z-10 text-yellow-400 font-bold tracking-[0.25em] mb-5 text-[60px]">
          MODULES
        </h2>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Users Card */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col gap-5">
            <div className="w-16 h-16 bg-yellow-400 text-black rounded-2xl flex items-center justify-center text-3xl max-auto">
              👥
            </div>

            <h3 className="text-[28px] font-bold text-white tracking-normal">
              Users Module
            </h3>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Browse and search users fetched from DummyJSON API.
            </p>

            <Link
              to="/users"
              className="bg-yellow-400 text-black rounded-xl py-3 w-full text-center no-underline text-[18px] font-bold hover:bg-yellow-300 transition"
            >
              Go to Users →
            </Link>
          </div>

          {/* Tasks Card */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col gap-5">
            <div className="w-16 h-16 bg-yellow-400 text-black rounded-2xl flex items-center justify-center text-3xl mx-auto">
              ✅
            </div>

            <h3 className="text-[28px] font-bold text-white tracking-normal">
              Tasks Module
            </h3>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Create, manage and track your personal tasks.
            </p>

            <Link
              to="/tasks"
              className="bg-yellow-400 text-black rounded-xl py-3 w-full text-center no-underline text-[18px] font-bold hover:bg-yellow-300 transition"
            >
              Go to Tasks →
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard