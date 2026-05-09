import { useState, useEffect } from 'react'
import Toast from '../components/tasks/Toast'
import EditModal from '../components/tasks/EditModal'
import DeleteModal from '../components/tasks/DeleteModal'
import TaskCard from '../components/tasks/TaskCard'
import TaskForm from '../components/tasks/TaskForm'

function Tasks({ user }) {
  const storageKey = `tasks_${user.email}`
  const [tasks, setTasks] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('newest')
  const [editTask, setEditTask] = useState(null)
  const [deleteId, setDeleteId] = useState(null)
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem(storageKey)
    if (saved) setTasks(JSON.parse(saved))
  }, [])

  const showToast = (message, type = 'success') => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000)
  }

  const saveTasks = (updated) => {
    setTasks(updated)
    localStorage.setItem(storageKey, JSON.stringify(updated))
  }

  const handleAdd = (data) => {
    saveTasks([...tasks, { id: Date.now(), title: data.title, description: data.description || '', status: 'Pending', date: new Date().toLocaleDateString() }])
    showToast('Task added successfully!')
  }

  const handleSaveEdit = (data) => {
    saveTasks(tasks.map(t => t.id === editTask.id ? { ...t, ...data } : t))
    setEditTask(null)
    showToast('Task updated!')
  }

  const confirmDelete = () => {
    saveTasks(tasks.filter(t => t.id !== deleteId))
    setDeleteId(null)
    showToast('Task deleted!', 'delete')
  }

  const toggleStatus = (id) => {
    const task = tasks.find(t => t.id === id)
    saveTasks(tasks.map(t => t.id === id ? { ...t, status: t.status === 'Pending' ? 'Completed' : 'Pending' } : t))
    showToast(task.status === 'Pending' ? 'Task completed! 🎉' : 'Marked as pending')
  }

  let filtered = tasks.filter(t => t.title.toLowerCase().includes(search.toLowerCase()))
  if (sort === 'az') filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title))
  else filtered = [...filtered].sort((a, b) => b.id - a.id)

  const btnBase = { borderRadius: '10px', padding: '10px 16px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', border: '1px solid #e2e8f0' }

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', padding: '40px 32px' }}>
      <Toast toasts={toasts} />
      {editTask && <EditModal task={editTask} onClose={() => setEditTask(null)} onSave={handleSaveEdit} />}
      {deleteId && <DeleteModal onClose={() => setDeleteId(null)} onConfirm={confirmDelete} />}

      <div style={{ maxWidth: '780px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginBottom: '4px' }}>My Tasks</h2>
            <p style={{ color: '#94a3b8', fontSize: '14px' }}>Manage your personal tasks</p>
          </div>
          <div style={{ background: '#6366f1', color: 'white', borderRadius: '12px', padding: '8px 18px', fontSize: '14px', fontWeight: '700' }}>
            {tasks.length} Task{tasks.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Form */}
        <TaskForm onAdd={handleAdd} />

        {/* Search + Sort */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
          <input type="text" placeholder="🔍 Search tasks by title..." value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ flex: 1, border: '1px solid #e2e8f0', borderRadius: '12px', padding: '11px 16px', fontSize: '14px', outline: 'none', background: 'white' }}
          />
          <button onClick={() => setSort('az')} style={{ ...btnBase, background: sort === 'az' ? '#0f172a' : 'white', color: sort === 'az' ? 'white' : '#64748b' }}>A → Z</button>
          <button onClick={() => setSort('newest')} style={{ ...btnBase, background: sort === 'newest' ? '#0f172a' : 'white', color: sort === 'newest' ? 'white' : '#64748b' }}>Newest</button>
        </div>

        {/* Tasks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {filtered.length === 0 && (
            <div style={{ background: 'white', borderRadius: '20px', border: '1px solid #e2e8f0', padding: '60px', textAlign: 'center' }}>
              <p style={{ fontSize: '40px', marginBottom: '12px' }}>📋</p>
              <p style={{ color: '#94a3b8', fontSize: '14px' }}>{search ? 'No tasks match your search' : 'No tasks yet!'}</p>
            </div>
          )}
          {filtered.map(task => (
            <TaskCard key={task.id} task={task} onToggle={toggleStatus} onEdit={setEditTask} onDelete={setDeleteId} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks