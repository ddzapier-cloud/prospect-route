const btnBase =
  'rounded-xl px-4 py-2 text-[13px] font-semibold cursor-pointer whitespace-nowrap border transition'

function TaskCard({ task, onToggle, onEdit, onDelete }) {
  const isCompleted = task.status === 'Completed'

  return (
    <div
      className={`bg-zinc-900 border border-zinc-800 rounded-3xl p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-5 border-l-4 ${
        isCompleted ? 'border-l-green-500' : 'border-l-yellow-400'
      }`}
    >
      {/* Info */}
      <div className="flex-1">
        <h4
          className={`text-[16px] font-bold mb-1 ${
            isCompleted
              ? 'text-zinc-500 line-through'
              : 'text-white'
          }`}
        >
          {task.title}
        </h4>

        {task.description && (
          <p className="text-zinc-400 text-[13px] mb-1">
            {task.description}
          </p>
        )}

        <p className="text-zinc-500 text-[12px]">
          📅 {task.date}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 flex-wrap md:flex-nowrap shrink-0 items-center">
        <div
          className={`${btnBase} cursor-default ${
            isCompleted
              ? 'bg-green-950 text-green-400 border-green-900'
              : 'bg-yellow-400 text-black border-yellow-400'
          }`}
        >
          {isCompleted ? '✅ Completed' : '⏳ Pending'}
        </div>

        <button
          onClick={() => onToggle(task.id)}
          className={`${btnBase} ${
            task.status === 'Pending'
              ? 'bg-green-950 text-green-400 border-green-900 hover:bg-green-900'
              : 'bg-yellow-400 text-black border-yellow-400 hover:bg-yellow-300'
          }`}
        >
          {task.status === 'Pending' ? '✓ Mark Done' : '↩ Undo'}
        </button>

        <button
          onClick={() => onEdit(task)}
          className={`${btnBase} bg-black text-yellow-400 border-zinc-700 hover:border-yellow-400`}
        >
          ✏️ Edit
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className={`${btnBase} bg-red-950 text-red-400 border-red-900 hover:bg-red-900`}
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  )
}

export default TaskCard