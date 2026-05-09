function Toast({ toasts }) {
  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999, display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {toasts.map(t => (
        <div key={t.id} style={{
          background: t.type === 'success' ? '#0f172a' : '#ef4444',
          color: 'white', padding: '12px 20px', borderRadius: '12px',
          fontSize: '13px', fontWeight: '600', boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          display: 'flex', alignItems: 'center', gap: '8px'
        }}>
          {t.type === 'success' ? '✅' : '🗑️'} {t.message}
        </div>
      ))}
    </div>
  )
}

export default Toast