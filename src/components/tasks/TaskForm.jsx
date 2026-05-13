import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  title: yup.string().required('Title is required').min(3, 'Min 3 characters'),
  description: yup.string().optional(),
})

function TaskForm({ onAdd }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    onAdd(data)
    reset()
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 mb-6">
      <h3 className="text-[20px] font-bold text-yellow-400 mb-5">
        ➕ Add New Task
      </h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row gap-3 mb-3">
          <div className="flex-1">
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
            className="flex-1 rounded-xl px-4 py-3 text-[14px] outline-none bg-black text-white placeholder:text-zinc-500 border border-zinc-800 focus:border-yellow-400 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black border-0 rounded-xl py-4 text-[14px] font-bold cursor-pointer hover:bg-yellow-300 transition"
        >
          + Add Task
        </button>
      </form>
    </div>
  )
}

export default TaskForm