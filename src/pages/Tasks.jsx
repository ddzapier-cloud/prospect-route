import { useState, useEffect } from 'react'
import Toast from '../components/tasks/Toast'
import EditModal from '../components/tasks/EditModal'
import DeleteModal from '../components/tasks/DeleteModal'
import TaskCard from '../components/tasks/TaskCard'
import TaskForm from '../components/tasks/TaskForm'
import TaskFilter from '../components/tasks/TaskFilter'

function Tasks({ user }) {
  const storageKey = `tasks_${user?.email || 'guest'}`
  const [tasks, setTasks] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('newest')
  const [filter, setFilter] = useState('all')
  const [editTask, setEditTask] = useState(null)
  const [deleteId, setDeleteId] = useState(null)
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem(storageKey)
    if (saved) setTasks(JSON.parse(saved))
  }, [storageKey])

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
    saveTasks([
      ...tasks,
      {
        id: Date.now(),
        title: data.title,
        description: data.description || '',
        status: 'Pending',
        date: new Date().toLocaleDateString(),
      },
    ])

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

    saveTasks(
      tasks.map(t =>
        t.id === id
          ? { ...t, status: t.status === 'Pending' ? 'Completed' : 'Pending' }
          : t
      )
    )

    showToast(task.status === 'Pending' ? 'Task completed! 🎉' : 'Marked as pending')
  }

  let filtered = tasks.filter(t =>
    t.title.toLowerCase().includes(search.toLowerCase())
  )

  if (filter !== 'all') {
    filtered = filtered.filter(t => t.status === filter)
  }

  if (sort === 'az') {
    filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title))
  } else {
    filtered = [...filtered].sort((a, b) => b.id - a.id)
  }

  const completedTasks = tasks.filter(t => t.status === 'Completed').length
  const pendingTasks = tasks.filter(t => t.status === 'Pending').length
  const progress =
    tasks.length === 0 ? 0 : Math.round((completedTasks / tasks.length) * 100)

  const btnBase =
    'rounded-xl border px-5 py-3 text-[13px] font-semibold cursor-pointer transition'

  return (
    <div className="min-h-screen bg-black text-white px-8 py-10">
      <Toast toasts={toasts} />

      {editTask && (
        <EditModal
          task={editTask}
          onClose={() => setEditTask(null)}
          onSave={handleSaveEdit}
        />
      )}

      {deleteId && (
        <DeleteModal
          onClose={() => setDeleteId(null)}
          onConfirm={confirmDelete}
        />
      )}

      <div className="max-w-225 mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-[58px] font-medium text-white leading-none mb-2">
              My <span className="text-yellow-400">Tasks</span>
            </h2>

            <p className="text-zinc-400 text-[14px]">
              Manage your personal tasks
            </p>
          </div>

          <div className="bg-yellow-400 text-black rounded-full px-6 py-2 text-[14px] font-bold">
            {tasks.length} Task{tasks.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-7 mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[15px] font-bold text-white">
              Overall Progress
            </span>

            <span className="text-[15px] font-bold text-yellow-400">
              {progress}%
            </span>
          </div>

          {/* Bar */}
          <div className="h-3 overflow-hidden rounded-full bg-black border border-zinc-800">
            <div
              className="h-full rounded-full bg-yellow-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-5 flex-wrap">
            <span className="text-[12px] text-zinc-400">
              ✅{' '}
              <strong className="text-green-500">
                {completedTasks}
              </strong>{' '}
              Completed
            </span>

            <span className="text-[12px] text-zinc-400">
              ⏳{' '}
              <strong className="text-yellow-400">
                {pendingTasks}
              </strong>{' '}
              Pending
            </span>

            <span className="text-[12px] text-zinc-400">
              📋{' '}
              <strong className="text-white">
                {tasks.length}
              </strong>{' '}
              Total
            </span>
          </div>
        </div>

        {/* Form */}
        <div className="mb-6">
          <TaskForm onAdd={handleAdd} />
        </div>

        <TaskFilter filter={filter} setFilter={setFilter} />

        {/* Search + Sort */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="🔍 Search tasks by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-[14px] text-white outline-none placeholder:text-zinc-500 focus:border-yellow-400 transition"
          />

          <button
            onClick={() => setSort('az')}
            className={`${btnBase} ${
              sort === 'az'
                ? 'bg-yellow-400 text-black border-yellow-400'
                : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:text-yellow-400 hover:border-yellow-400'
            }`}
          >
            A → Z
          </button>

          <button
            onClick={() => setSort('newest')}
            className={`${btnBase} ${
              sort === 'newest'
                ? 'bg-yellow-400 text-black border-yellow-400'
                : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:text-yellow-400 hover:border-yellow-400'
            }`}
          >
            Newest
          </button>
        </div>

        {/* Tasks */}
        <div className="flex flex-col gap-4">
          {filtered.length === 0 && (
            <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-16 text-center">
              <p className="text-[52px] mb-3">📋</p>

              <p className="text-zinc-400 text-[14px]">
                {search ? 'No tasks match your search' : 'No tasks yet!'}
              </p>
            </div>
          )}

          {filtered.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={toggleStatus}
              onEdit={setEditTask}
              onDelete={setDeleteId}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks