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

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white ml-[240px] flex items-center justify-center">
        <div className="text-center bg-zinc-900 border border-zinc-800 rounded-3xl p-16">
          <p className="text-[42px] mb-3">⏳</p>
          <p className="text-zinc-400 text-[14px]">
            Loading user details...
          </p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white ml-[240px] flex items-center justify-center">
        <div className="bg-red-950 text-red-400 border border-red-900 px-6 py-4 rounded-xl text-[14px]">
          ⚠️ {error}
        </div>
      </div>
    )
  }

  const InfoRow = ({ label, value }) => (
    <div className="flex justify-between gap-4 py-3 border-b border-zinc-800 last:border-b-0">
      <span className="text-zinc-400 text-[13px] font-medium">
        {label}
      </span>

      <span className="text-white text-[13px] font-semibold text-right">
        {value || '—'}
      </span>
    </div>
  )

  return (
    <div className="min-h-screen bg-black text-white px-8 py-10">
      <div className="max-w-200 mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate('/users')}
          className="bg-zinc-900 text-zinc-300 border border-zinc-800 rounded-xl px-5 py-3 text-[14px] font-semibold cursor-pointer mb-8 flex items-center gap-2 hover:text-yellow-400 hover:border-yellow-400 transition"
        >
          ← Back to Users
        </button>

        {/* Profile Header Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-6 flex items-center gap-6">
          <img
            src={user.image}
            alt={user.firstName}
            className="w-24 h-24 rounded-full object-cover border-4 border-yellow-400 bg-white flex-shrink-0"
          />

          <div>
            <h2 className="text-[36px] font-medium text-white mb-1 leading-none">
              {user.firstName} {user.lastName}
            </h2>

            <p className="text-yellow-400 text-[15px] font-semibold mb-4 text-left mb-4">
              @{user.username}
            </p>

            <div className="flex gap-2 flex-wrap mt-5">
              <span className="bg-yellow-400 text-black text-[12px] font-bold px-4 py-1 rounded-full">
                Age: {user.age}
              </span>

              <span className="bg-zinc-800 text-zinc-200 text-[12px] font-semibold px-4 py-1 rounded-full">
                {user.gender}
              </span>

              <span className="bg-black border border-zinc-700 text-yellow-400 text-[12px] font-semibold px-4 py-1 rounded-full">
                {user.role}
              </span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 mb-6">
          <h3 className="text-[30px] font-medium text-yellow-400 mb-5">
            📬 Contact Information
          </h3>

          <InfoRow label="Email" value={user.email} />
          <InfoRow label="Phone" value={user.phone} />
          <InfoRow label="Username" value={user.username} />
        </div>

        {/* Address */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 mb-6">
          <h3 className="text-[30px] font-medium text-yellow-400 mb-5">
            📍 Address
          </h3>

          <InfoRow label="Street" value={user.address?.address} />
          <InfoRow label="City" value={user.address?.city} />
          <InfoRow label="State" value={user.address?.state} />
          <InfoRow label="Postal Code" value={user.address?.postalCode} />
          <InfoRow label="Country" value={user.address?.country} />
        </div>

        {/* Company */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7">
          <h3 className="text-[30px] font-medium text-yellow-400 mb-5">
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