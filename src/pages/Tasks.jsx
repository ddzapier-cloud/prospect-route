import { useState, useEffect } from 'react'

function Tasks({ user }) {
  const storageKey = `tasks_${user.email}`
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')
  const [editId, setEditId] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem(storageKey)
    if (saved) setTasks(JSON.parse(saved))
  }, [])

  const saveTasks = (updated) => {
    setTasks(updated)
    localStorage.setItem(storageKey, JSON.stringify(updated))
  }

  const handleAdd = () => {
    if (!title.trim()) { setError('Title is required'); return }
    setError('')
    if (editId !== null) {
      saveTasks(tasks.map(t => t.id === editId ? { ...t, title, description } : t))
      setEditId(null)
    } else {
      saveTasks([...tasks, {
        id: Date.now(), title, description,
        status: 'Pending', date: new Date().toLocaleDateString()
      }])
    }
    setTitle(''); setDescription('')
  }

  const toggleStatus = (id) => {
    saveTasks(tasks.map(t => t.id === id
      ? { ...t, status: t.status === 'Pending' ? 'Completed' : 'Pending' } : t))
  }

  const handleEdit = (task) => {
    setTitle(task.title)
    setDescription(task.description)
    setEditId(task.id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = (id) => {
    if (window.confirm('Delete this task?')) saveTasks(tasks.filter(t => t.id !== id))
  }

  const btnBase = {
    borderRadius: '10px',
    padding: '10px 18px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    border: 'none',
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', padding: '40px 32px' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginBottom: '4px' }}>My Tasks</h1>
            <p style={{ color: '#94a3b8', fontSize: '14px' }}>Manage your personal tasks</p>
          </div>
          <div style={{ background: '#6366f1', color: 'white', borderRadius: '12px', padding: '8px 18px', fontSize: '14px', fontWeight: '700' }}>
            {tasks.length} Task{tasks.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Add Task Form */}
        <div style={{ background: 'white', borderRadius: '20px', border: '1px solid #e2e8f0', padding: '28px', marginBottom: '28px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#6366f1', marginBottom: '20px' }}>
            {editId !== null ? '✏️ Edit Task' : '➕ Add New Task'}
          </h2>

          {error && (
            <div style={{ background: '#fef2f2', color: '#ef4444', fontSize: '13px', padding: '10px 14px', borderRadius: '10px', marginBottom: '14px' }}>
              {error}
            </div>
          )}

          <div style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
            <input
              type="text"
              placeholder="Task title *"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ flex: 1, border: '1px solid #e2e8f0', borderRadius: '12px', padding: '12px 16px', fontSize: '14px', outline: 'none', background: '#f8fafc' }}
            />
            <input
              type="text"
              placeholder="Description (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ flex: 1, border: '1px solid #e2e8f0', borderRadius: '12px', padding: '12px 16px', fontSize: '14px', outline: 'none', background: '#f8fafc' }}
            />
          </div>

          <button
            onClick={handleAdd}
            style={{ width: '100%', background: '#0f172a', color: 'white', border: 'none', borderRadius: '12px', padding: '14px', fontSize: '14px', fontWeight: '700', cursor: 'pointer' }}
          >
            {editId !== null ? '✅ Update Task' : '+ Add Task'}
          </button>
        </div>

        {/* Tasks List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {tasks.length === 0 && (
            <div style={{ background: 'white', borderRadius: '20px', border: '1px solid #e2e8f0', padding: '60px', textAlign: 'center' }}>
              <p style={{ fontSize: '40px', marginBottom: '12px' }}>📋</p>
              <p style={{ color: '#94a3b8', fontSize: '14px' }}>No tasks yet. Add one above!</p>
            </div>
          )}

          {tasks.map(task => (
            <div
              key={task.id}
              style={{
                background: 'white',
                borderRadius: '20px',
                border: '1px solid #e2e8f0',
                padding: '22px 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '20px',
                borderLeft: task.status === 'Completed' ? '5px solid #22c55e' : '5px solid #6366f1',
              }}
            >
              {/* Task Info */}
              <div style={{ flex: 1 }}>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: task.status === 'Completed' ? '#94a3b8' : '#0f172a',
                  textDecoration: task.status === 'Completed' ? 'line-through' : 'none',
                  marginBottom: '4px'
                }}>
                  {task.title}
                </h4>
                {task.description && (
                  <p style={{ color: '#64748b', fontSize: '13px', marginBottom: '4px' }}>{task.description}</p>
                )}
                <p style={{ color: '#cbd5e1', fontSize: '12px' }}>📅 {task.date}</p>
              </div>

              {/* Buttons */}
              <div style={{ display: 'flex', gap: '10px', flexShrink: 0, alignItems: 'center' }}>

                {/* Status Badge — same size as buttons */}
                <div style={{
                  ...btnBase,
                  background: task.status === 'Completed' ? '#dcfce7' : '#fef9c3',
                  color: task.status === 'Completed' ? '#16a34a' : '#ca8a04',
                  cursor: 'default',
                }}>
                  {task.status === 'Completed' ? '✅ Completed' : '⏳ Pending'}
                </div>

                <button
                  onClick={() => toggleStatus(task.id)}
                  style={{
                    ...btnBase,
                    background: task.status === 'Pending' ? '#f0fdf4' : '#fef9c3',
                    color: task.status === 'Pending' ? '#16a34a' : '#ca8a04',
                    border: task.status === 'Pending' ? '1px solid #bbf7d0' : '1px solid #fde68a',
                  }}
                >
                  {task.status === 'Pending' ? '✓ Mark Done' : '↩ Undo'}
                </button>

                <button
                  onClick={() => handleEdit(task)}
                  style={{
                    ...btnBase,
                    background: '#eff6ff',
                    color: '#2563eb',
                    border: '1px solid #bfdbfe',
                  }}
                >
                  ✏️ Edit
                </button>

                <button
                  onClick={() => handleDelete(task.id)}
                  style={{
                    ...btnBase,
                    background: '#fef2f2',
                    color: '#ef4444',
                    border: '1px solid #fecaca',
                  }}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks