const btnBase = {
  borderRadius: '10px', padding: '10px 16px', fontSize: '13px',
  fontWeight: '600', cursor: 'pointer', whiteSpace: 'nowrap', border: 'none',
}

function TaskCard({ task, onToggle, onEdit, onDelete }) {
  return (
    <div style={{
      background: 'white', borderRadius: '20px', border: '1px solid #e2e8f0',
      padding: '20px 24px', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', gap: '20px',
      borderLeft: task.status === 'Completed' ? '5px solid #22c55e' : '5px solid #6366f1',
    }}>
      {/* Info */}
      <div style={{ flex: 1 }}>
        <h4 style={{
          fontSize: '15px', fontWeight: '700', marginBottom: '4px',
          color: task.status === 'Completed' ? '#94a3b8' : '#0f172a',
          textDecoration: task.status === 'Completed' ? 'line-through' : 'none',
        }}>
          {task.title}
        </h4>
        {task.description && (
          <p style={{ color: '#64748b', fontSize: '13px', marginBottom: '4px' }}>{task.description}</p>
        )}
        <p style={{ color: '#cbd5e1', fontSize: '12px' }}>📅 {task.date}</p>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '8px', flexShrink: 0, alignItems: 'center' }}>
        <div style={{
          ...btnBase, cursor: 'default',
          background: task.status === 'Completed' ? '#dcfce7' : '#fef9c3',
          color: task.status === 'Completed' ? '#16a34a' : '#ca8a04',
        }}>
          {task.status === 'Completed' ? '✅ Completed' : '⏳ Pending'}
        </div>

        <button onClick={() => onToggle(task.id)} style={{
          ...btnBase,
          background: task.status === 'Pending' ? '#f0fdf4' : '#fef9c3',
          color: task.status === 'Pending' ? '#16a34a' : '#ca8a04',
          border: task.status === 'Pending' ? '1px solid #bbf7d0' : '1px solid #fde68a',
        }}>
          {task.status === 'Pending' ? '✓ Mark Done' : '↩ Undo'}
        </button>

        <button onClick={() => onEdit(task)} style={{
          ...btnBase, background: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe',
        }}>
          ✏️ Edit
        </button>

        <button onClick={() => onDelete(task.id)} style={{
          ...btnBase, background: '#fef2f2', color: '#ef4444', border: '1px solid #fecaca',
        }}>
          🗑️ Delete
        </button>
      </div>
    </div>
  )
}

export default TaskCard