import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function UserDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/users/${id}`)
        const data = await res.json()
        setUser(data)
      } catch {
        setError('Failed to fetch user details')
      }
      setLoading(false)
    }
    fetchUser()
  }, [id])

  if (loading) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '40px', marginBottom: '12px' }}>⏳</p>
        <p style={{ color: '#94a3b8', fontSize: '14px' }}>Loading user details...</p>
      </div>
    </div>
  )

  if (error) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ color: '#ef4444' }}>{error}</p>
    </div>
  )

  const InfoRow = ({ label, value }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #f1f5f9' }}>
      <span style={{ color: '#94a3b8', fontSize: '13px', fontWeight: '500' }}>{label}</span>
      <span style={{ color: '#0f172a', fontSize: '13px', fontWeight: '600' }}>{value || '—'}</span>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', padding: '40px 32px' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>

        {/* Back Button */}
        <button
          onClick={() => navigate('/users')}
          style={{
            background: 'white', border: '1px solid #e2e8f0', borderRadius: '10px',
            padding: '9px 18px', fontSize: '13px', fontWeight: '600',
            color: '#64748b', cursor: 'pointer', marginBottom: '28px',
            display: 'flex', alignItems: 'center', gap: '6px'
          }}
        >
          ← Back to Users
        </button>

        {/* Profile Header Card */}
        <div style={{
          background: 'white', borderRadius: '20px', border: '1px solid #e2e8f0',
          padding: '32px', marginBottom: '20px',
          display: 'flex', alignItems: 'center', gap: '24px'
        }}>
          <img
            src={user.image}
            alt={user.firstName}
            style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #e2e8f0' }}
          />
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', marginBottom: '4px' }}>
              {user.firstName} {user.lastName}
            </h1>
            <p style={{ color: '#6366f1', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>
              @{user.username}
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ background: '#f0fdf4', color: '#16a34a', fontSize: '12px', fontWeight: '600', padding: '4px 12px', borderRadius: '999px' }}>
                Age: {user.age}
              </span>
              <span style={{ background: '#eff6ff', color: '#2563eb', fontSize: '12px', fontWeight: '600', padding: '4px 12px', borderRadius: '999px' }}>
                {user.gender}
              </span>
              <span style={{ background: '#fef9c3', color: '#ca8a04', fontSize: '12px', fontWeight: '600', padding: '4px 12px', borderRadius: '999px' }}>
                {user.role}
              </span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div style={{ background: 'white', borderRadius: '20px', border: '1px solid #e2e8f0', padding: '28px', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', marginBottom: '16px' }}>
            📬 Contact Information
          </h3>
          <InfoRow label="Email" value={user.email} />
          <InfoRow label="Phone" value={user.phone} />
          <InfoRow label="Username" value={user.username} />
        </div>

        {/* Address */}
        <div style={{ background: 'white', borderRadius: '20px', border: '1px solid #e2e8f0', padding: '28px', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', marginBottom: '16px' }}>
            📍 Address
          </h3>
          <InfoRow label="Street" value={user.address?.address} />
          <InfoRow label="City" value={user.address?.city} />
          <InfoRow label="State" value={user.address?.state} />
          <InfoRow label="Postal Code" value={user.address?.postalCode} />
          <InfoRow label="Country" value={user.address?.country} />
        </div>

        {/* Company */}
        <div style={{ background: 'white', borderRadius: '20px', border: '1px solid #e2e8f0', padding: '28px' }}>
          <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', marginBottom: '16px' }}>
            🏢 Company
          </h3>
          <InfoRow label="Company Name" value={user.company?.name} />
          <InfoRow label="Department" value={user.company?.department} />
          <InfoRow label="Title" value={user.company?.title} />
        </div>

      </div>
    </div>
  )
}

export default UserDetail