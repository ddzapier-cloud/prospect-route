import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  title: yup.string().required('Title is required').min(3, 'Min 3 characters'),
  description: yup.string().optional(),
})

function EditModal({ task, onClose, onSave }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: task.title,
      description: task.description,
    },
  })

  const onSubmit = (data) => {
    onSave(data)
    onClose()
  }

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-999 backdrop-blur-sm px-4"
    >
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-9 w-full max-w-115 shadow-2xl relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700 flex items-center justify-center cursor-pointer hover:text-yellow-400 hover:border-yellow-400 transition"
        >
          ✕
        </button>

        <h2 className="text-[22px] font-bold text-yellow-400 mb-2">
          ✏️ Edit Task
        </h2>

        <p className="text-zinc-400 text-[13px] mb-6">
          Update your task details
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div>
            <input
              {...register('title')}
              placeholder="Task title *"
              className={`w-full box-border rounded-xl px-4 py-3 text-[14px] outline-none bg-black text-white placeholder:text-zinc-500 transition ${
                errors.title
                  ? 'border border-red-500'
                  : 'border border-zinc-800 focus:border-yellow-400'
              }`}
            />

            {errors.title && (
              <p className="text-red-500 text-[12px] mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          <input
            {...register('description')}
            placeholder="Description (optional)"
            className="w-full box-border rounded-xl px-4 py-3 text-[14px] outline-none bg-black text-white placeholder:text-zinc-500 border border-zinc-800 focus:border-yellow-400 transition"
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black border-0 rounded-xl py-4 text-[14px] font-bold cursor-pointer hover:bg-yellow-300 transition"
          >
            ✅ Update Task
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditModal