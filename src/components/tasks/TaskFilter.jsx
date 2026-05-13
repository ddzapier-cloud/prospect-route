function TaskFilter({ filter, setFilter }) {
  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Pending', value: 'Pending' },
    { label: 'Completed', value: 'Completed' },
  ]

  return (
    <div className="flex gap-3 mb-6 flex-wrap">
      {filters.map(item => (
        <button
          key={item.value}
          onClick={() => setFilter(item.value)}
          className={`rounded-xl border px-5 py-3 text-[13px] font-semibold cursor-pointer transition ${
            filter === item.value
              ? 'bg-yellow-400 text-black border-yellow-400'
              : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:text-yellow-400 hover:border-yellow-400'
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}

export default TaskFilter