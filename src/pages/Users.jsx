import { useState, useEffect } from 'react'

function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')

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

  const filtered = users.filter(u =>
    `${u.firstName} ${u.lastName}`.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Users</h1>
            <p className="text-slate-400 text-sm mt-1">Fetched from DummyJSON API</p>
          </div>
          {!loading && (
            <span style={{background:'#0f172a'}} className="text-white text-sm px-4 py-2 rounded-xl font-medium">
              {filtered.length} Users
            </span>
          )}
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="🔍  Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-slate-200 rounded-xl px-5 py-3 text-sm mb-6 focus:outline-none focus:ring-2 focus:ring-slate-300 bg-white shadow-sm"
        />

        {loading && (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
            <p className="text-4xl mb-3">⏳</p>
            <p className="text-slate-400 text-sm">Loading users...</p>
          </div>
        )}
        {error && (
          <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm">{error}</div>
        )}

        {!loading && !error && (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-2 text-white text-sm font-semibold px-6 py-4" style={{background:'#0f172a'}}>
              <span>Name</span>
              <span>Email</span>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-12 text-slate-400">No users found</div>
            ) : (
              filtered.map((u, i) => (
                <div
                  key={u.id}
                  className="grid grid-cols-2 px-6 py-4 text-sm border-b border-slate-100 hover:bg-blue-50 transition"
                  style={{ background: i % 2 !== 0 ? '#eef2ff' : '#ffffff' }}
                >
                  <span className="text-slate-800 font-medium">{u.firstName} {u.lastName}</span>
                  <span className="text-slate-500">{u.email}</span>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Users