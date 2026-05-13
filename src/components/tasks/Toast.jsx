function Toast({ toasts }) {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">
      {toasts.map(t => (
        <div
          key={t.id}
          className={`flex items-center gap-2 rounded-xl px-5 py-3 text-[13px] font-semibold shadow-2xl border ${
            t.type === 'success'
              ? 'bg-zinc-900 text-white border-zinc-800'
              : 'bg-red-600 text-white border-red-600'
          }`}
        >
          <span>
            {t.type === 'success' ? '✅' : '🗑️'}
          </span>

          <span>
            {t.message}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Toast