import { Link } from 'react-router-dom'

function Dashboard({ user }) {
  return (
    <div className="min-h-screen" style={{ background: '#f1f5f9' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '48px 32px' }}>

        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#0f172a', marginBottom: '10px' }}>
            Welcome back! 👋
          </h1>
          <div className="inline-flex items-center gap-2"
            style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '999px', padding: '6px 14px' }}>
            <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#22c55e' }}></span>
            <span style={{ color: '#64748b', fontSize: '13px' }}>{user.email}</span>
          </div>
        </div>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '40px' }}>
          {[
            { label: 'Total Users', value: '20', icon: '👥', color: '#eff6ff', iconBg: '#2563eb' },
            { label: 'Active Tasks', value: 'My Tasks', icon: '✅', color: '#f0fdf4', iconBg: '#16a34a' },
            { label: 'Status', value: 'Active', icon: '🟢', color: '#fefce8', iconBg: '#ca8a04' },
          ].map((stat, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '16px', padding: '20px', border: '1px solid #e2e8f0' }}>
              <div className="flex items-center justify-between mb-3">
                <span style={{ color: '#94a3b8', fontSize: '12px', fontWeight: '600' }}>{stat.label}</span>
                <span style={{ fontSize: '18px' }}>{stat.icon}</span>
              </div>
              <p style={{ color: '#0f172a', fontSize: '22px', fontWeight: '800' }}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Module Cards */}
        <p style={{ color: '#64748b', fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', marginBottom: '16px' }}>
          MODULES
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

          {/* Users Card */}
          <div style={{ background: 'white', borderRadius: '20px', border: '1px solid #e2e8f0', padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ width: '60px', height: '60px', background: '#eff6ff', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '16px' }}>
              👥
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>Users Module</h3>
            <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.6', marginBottom: '24px' }}>
              Browse and search users fetched from DummyJSON API.
            </p>
            <Link
              to="/users"
              style={{ background: '#0f172a', color: 'white', borderRadius: '12px', padding: '12px 0', width: '100%', textAlign: 'center', textDecoration: 'none', fontSize: '14px', fontWeight: '600', display: 'block' }}
            >
              Go to Users →
            </Link>
          </div>

          {/* Tasks Card */}
          <div style={{ background: 'white', borderRadius: '20px', border: '1px solid #e2e8f0', padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ width: '60px', height: '60px', background: '#f0fdf4', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '16px' }}>
              ✅
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>Tasks Module</h3>
            <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.6', marginBottom: '24px' }}>
              Create, manage and track your personal tasks.
            </p>
            <Link
              to="/tasks"
              style={{ background: '#0f172a', color: 'white', borderRadius: '12px', padding: '12px 0', width: '100%', textAlign: 'center', textDecoration: 'none', fontSize: '14px', fontWeight: '600', display: 'block' }}
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