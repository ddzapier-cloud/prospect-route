function DeleteModal({ onClose, onConfirm }) {
  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999] backdrop-blur-sm px-4"
    >
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-9 w-full max-w-[380px] text-center shadow-2xl">
        <p className="text-[44px] mb-3">
          🗑️
        </p>

        <h3 className="text-[20px] font-bold text-white mb-2">
          Delete Task?
        </h3>

        <p className="text-zinc-400 text-[13px] mb-7">
          This action cannot be undone.
        </p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={onClose}
            className="bg-zinc-800 text-zinc-300 border border-zinc-700 rounded-xl px-7 py-3 text-[14px] font-semibold cursor-pointer hover:text-yellow-400 hover:border-yellow-400 transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="bg-red-600 text-white border border-red-600 rounded-xl px-7 py-3 text-[14px] font-semibold cursor-pointer hover:bg-red-500 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal