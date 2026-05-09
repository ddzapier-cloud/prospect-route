function DeleteModal({ onClose, onConfirm }) {
  return (
    <div onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999, backdropFilter: 'blur(4px)' }}>
      <div style={{ background: 'white', borderRadius: '20px', padding: '36px', width: '100%', maxWidth: '380px', textAlign: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}>
        <p style={{ fontSize: '44px', marginBottom: '12px' }}>🗑️</p>
        <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>Delete Task?</h3>
        <p style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '28px' }}>This action cannot be undone.</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button onClick={onClose} style={{ background: '#f1f5f9', color: '#64748b', border: 'none', borderRadius: '12px', padding: '12px 28px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
            Cancel
          </button>
          <button onClick={onConfirm} style={{ background: '#ef4444', color: 'white', border: 'none', borderRadius: '12px', padding: '12px 28px', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal