import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('none')
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://dummyjson.com/users?limit=20')
        const data = await res.json()
        setUsers(data.users)
      } catch {
        setError('Failed to fetch users')
      }

      setLoading(false)
    }

    fetchUsers()
  }, [])

  let filtered = users.filter(u =>
    `${u.firstName} ${u.lastName}`.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  )

  if (sort === 'az') {
    filtered = [...filtered].sort((a, b) =>
      `${a.firstName}`.localeCompare(`${b.firstName}`)
    )
  } else if (sort === 'za') {
    filtered = [...filtered].sort((a, b) =>
      `${b.firstName}`.localeCompare(`${a.firstName}`)
    )
  }

  return (
    <div className="min-h-screen bg-black text-white px-8 py-10">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-[52px] font-medium text-white leading-none">
              Users
            </h2>

            {!loading && (
              <div className="bg-yellow-400 text-black rounded-xl px-5 py-2 text-[14px] font-bold">
                {filtered.length} / {users.length} Users
              </div>
            )}
          </div>

          <p className="text-zinc-400 text-[14px]">
            Fetched from DummyJSON API
          </p>
        </div>

        {/* Search + Sort */}
        <div className="flex gap-3 mb-8">
          <div className="flex-1 relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[16px]">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full box-border bg-zinc-900 border border-zinc-800 rounded-xl py-3 pr-4 pl-11 text-[14px] text-white outline-none placeholder:text-zinc-500 focus:border-yellow-400 transition"
            />
          </div>

          {[{ label: 'A → Z', val: 'az' }, { label: 'Z → A', val: 'za' }].map(btn => (
            <button
              key={btn.val}
              onClick={() => setSort(sort === btn.val ? 'none' : btn.val)}
              className={`px-5 py-3 rounded-xl text-[13px] font-semibold cursor-pointer transition ${
                sort === btn.val
                  ? 'bg-yellow-400 text-black border border-yellow-400'
                  : 'bg-zinc-900 text-zinc-300 border border-zinc-800 hover:text-yellow-400'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-20 text-center">
            <p className="text-[40px] mb-3">⏳</p>
            <p className="text-zinc-400 text-[14px]">
              Loading users...
            </p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-950 text-red-400 border border-red-900 px-5 py-4 rounded-xl text-[14px]">
            ⚠️ {error}
          </div>
        )}

        {/* Users Grid */}
        {!loading && !error && (
          <>
            {filtered.length === 0 ? (
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-20 text-center">
                <p className="text-[40px] mb-3">🔍</p>
                <p className="text-zinc-400 text-[14px]">
                  No users found for "{search}"
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((u) => (
                  <div
                    key={u.id}
                    className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 flex flex-col gap-4 transition hover:border-yellow-400 hover:shadow-xl"
                  >
                    {/* Top: Avatar + Name */}
                    <div className="flex items-center gap-4">
                      <img
                        src={u.image}
                        alt={u.firstName}
                        className="w-[54px] h-[54px] rounded-full object-cover border-2 border-yellow-400 flex-shrink-0 bg-white"
                      />

                      <div className="overflow-hidden">
                        <p className="text-[16px] font-bold text-white mb-1 truncate">
                          {u.firstName} {u.lastName}
                        </p>

                        <p className="text-[12px] text-yellow-400 font-semibold">
                          @{u.username}
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="bg-black border border-zinc-800 rounded-xl px-4 py-3 text-[12px] text-zinc-300 overflow-hidden text-ellipsis whitespace-nowrap">
                      📧 {u.email}
                    </div>

                    {/* Badges */}
                    <div className="flex gap-2 flex-wrap">
                      <span className="bg-yellow-400 text-black text-[11px] font-semibold px-3 py-1 rounded-full">
                        {u.gender}
                      </span>

                      <span className="bg-zinc-800 text-zinc-200 text-[11px] font-semibold px-3 py-1 rounded-full">
                        Age {u.age}
                      </span>

                      <span className="bg-black border border-zinc-700 text-yellow-400 text-[11px] font-semibold px-3 py-1 rounded-full">
                        {u.role}
                      </span>
                    </div>

                    {/* View Button */}
                    <button
                      onClick={() => navigate(`/users/${u.id}`)}
                      className="w-full bg-yellow-400 text-black border-0 rounded-xl py-3 text-[14px] font-bold cursor-pointer hover:bg-yellow-300 transition"
                    >
                      View Profile →
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Users