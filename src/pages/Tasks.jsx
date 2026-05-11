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

  const btnBase = "rounded-lg border px-4 py-2 text-sm font-semibold cursor-pointer"

  return (
    <div className="min-h-screen bg-slate-50 px-8 py-10">
      <Toast toasts={toasts} />
      {editTask && <EditModal task={editTask} onClose={() => setEditTask(null)} onSave={handleSaveEdit} />}
      {deleteId && <DeleteModal onClose={() => setDeleteId(null)} onConfirm={confirmDelete} />}

      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-bold text-slate-800 text-left text-6xl">My Tasks</h2>
            <p className="text-slate-500 text-sm">Manage your personal tasks</p>
          </div>
          <div className="bg-indigo-600 text-white rounded-full px-6 py-2 text-sm font-semibold">
            {tasks.length} Task{tasks.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-slate-900">Overall Progress</span>
            <span className="text-sm font-semibold text-indigo-600">
              {tasks.length === 0 ? 0 : Math.round((tasks.filter(t => t.status === 'Completed').length / tasks.length) * 100)}%
            </span>
          </div>

          {/* Bar */}
          <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-green-500 transition-all duration-500"
              style={{
                width: `${tasks.length === 0 ? 0 : Math.round((tasks.filter(t => t.status === 'Completed').length / tasks.length) * 100)}%`
              }}
            />
          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-4">
            <span className="text-xs text-slate-500">
              ✅ <strong className="text-green-600">{tasks.filter(t => t.status === 'Completed').length}</strong> Completed
            </span>
            <span className="text-xs text-slate-500">
              ⏳ <strong className="text-yellow-600">{tasks.filter(t => t.status === 'Pending').length}</strong> Pending
            </span>
            <span className="text-xs text-slate-500">
              📋 <strong className="text-indigo-600">{tasks.length}</strong> Total
            </span>
          </div>
        </div>

        {/* Form */}
        <TaskForm onAdd={handleAdd} />

        {/* Search + Sort */}
        <div className="flex gap-3 mb-5">
          <input
            type="text"
            placeholder="🔍 Search tasks by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none bg-white"
          />
          <button
            onClick={() => setSort('az')}
            className={`${btnBase} ${sort === 'az' ? 'bg-slate-900 text-white' : 'bg-white text-slate-500'}`}
          >
            A → Z
          </button>
          <button
            onClick={() => setSort('newest')}
            className={`${btnBase} ${sort === 'newest' ? 'bg-slate-900 text-white' : 'bg-white text-slate-500'}`}
          >
            Newest
          </button>
        </div>

        {/* Tasks */}
        <div className="flex flex-col gap-4">
          {filtered.length === 0 && (
            <div className="bg-white rounded-2xl border border-slate-200 p-16 text-center">
              <p className="text-5xl mb-3">📋</p>
              <p className="text-slate-500 text-sm">{search ? 'No tasks match your search' : 'No tasks yet!'}</p>
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