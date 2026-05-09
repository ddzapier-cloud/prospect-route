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

  // Search filter
  let filtered = users.filter(u =>
    `${u.firstName} ${u.lastName}`.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  )

  // Sorting
  if (sort === 'az') {
    filtered = [...filtered].sort((a, b) =>
      `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`)
    )
  } else if (sort === 'za') {
    filtered = [...filtered].sort((a, b) =>
      `${b.firstName} ${b.lastName}`.localeCompare(`${a.firstName} ${a.lastName}`)
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-bold text-slate-800 text-left text-6xl">Users</h2>
            <p className="text-slate-400 text-sm mt-1">Fetched from DummyJSON API</p>
          </div>
          {!loading && (
            <span style={{ background: '#0f172a' }} className="text-white text-sm px-4 py-2 rounded-xl font-medium">
              {filtered.length} Users
            </span>
          )}
        </div>

        {/* Search + Sort Row */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
          <input
            type="text"
            placeholder="🔍  Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              flex: 1, border: '1px solid #e2e8f0', borderRadius: '12px',
              padding: '12px 18px', fontSize: '14px', outline: 'none',
              background: 'white', boxShadow: '0 1px 4px rgba(0,0,0,0.05)'
            }}
          />

          {/* Sort Buttons */}
          <button
            onClick={() => setSort(sort === 'az' ? 'none' : 'az')}
            style={{
              padding: '10px 18px', borderRadius: '12px', fontSize: '13px',
              fontWeight: '600', cursor: 'pointer', border: '1px solid #e2e8f0',
              background: sort === 'az' ? '#0f172a' : 'white',
              color: sort === 'az' ? 'white' : '#64748b',
              whiteSpace: 'nowrap'
            }}
          >
            A → Z
          </button>
          <button
            onClick={() => setSort(sort === 'za' ? 'none' : 'za')}
            style={{
              padding: '10px 18px', borderRadius: '12px', fontSize: '13px',
              fontWeight: '600', cursor: 'pointer', border: '1px solid #e2e8f0',
              background: sort === 'za' ? '#0f172a' : 'white',
              color: sort === 'za' ? 'white' : '#64748b',
              whiteSpace: 'nowrap'
            }}
          >
            Z → A
          </button>
        </div>

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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', background: '#0f172a', padding: '14px 24px' }}>
              <span style={{ color: 'white', fontSize: '13px', fontWeight: '600' }}>Name</span>
              <span style={{ color: 'white', fontSize: '13px', fontWeight: '600' }}>Email</span>
              <span style={{ color: 'white', fontSize: '13px', fontWeight: '600' }}>Details</span>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-12 text-slate-400">No users found</div>
            ) : (
              filtered.map((u, i) => (
                <div
                  key={u.id}
                  style={{
                    display: 'grid', gridTemplateColumns: '1fr 1fr auto',
                    padding: '14px 24px', borderBottom: '1px solid #f1f5f9',
                    background: i % 2 !== 0 ? '#eef2ff' : '#ffffff',
                    alignItems: 'center'
                  }}
                >
                  <span style={{ color: '#0f172a', fontSize: '14px', fontWeight: '500' }}>
                    {u.firstName} {u.lastName}
                  </span>
                  <span style={{ color: '#64748b', fontSize: '14px' }}>{u.email}</span>
                  <button
                    onClick={() => navigate(`/users/${u.id}`)}
                    style={{
                      background: '#6366f1', color: 'white', border: 'none',
                      borderRadius: '8px', padding: '6px 14px', fontSize: '12px',
                      fontWeight: '600', cursor: 'pointer'
                    }}
                  >
                    View →
                  </button>
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