import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  title: yup.string().required('Title is required').min(3, 'Min 3 characters'),
  description: yup.string().optional(),
})

function TaskForm({ onAdd }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => { onAdd(data); reset() }

  return (
    <div style={{ background: 'white', borderRadius: '20px', border: '1px solid #e2e8f0', padding: '28px', marginBottom: '24px' }}>
      <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#6366f1', marginBottom: '18px' }}>➕ Add New Task</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
          <div style={{ flex: 1 }}>
            <input {...register('title')} placeholder="Task title *"
              style={{ width: '100%', border: errors.title ? '1px solid #ef4444' : '1px solid #e2e8f0', borderRadius: '12px', padding: '12px 16px', fontSize: '14px', outline: 'none', background: '#f8fafc', boxSizing: 'border-box' }}
            />
            {errors.title && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.title.message}</p>}
          </div>
          <input {...register('description')} placeholder="Description (optional)"
            style={{ flex: 1, border: '1px solid #e2e8f0', borderRadius: '12px', padding: '12px 16px', fontSize: '14px', outline: 'none', background: '#f8fafc' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', background: '#0f172a', color: 'white', border: 'none', borderRadius: '12px', padding: '14px', fontSize: '14px', fontWeight: '700', cursor: 'pointer' }}>
          + Add Task
        </button>
      </form>
    </div>
  )
}

export default TaskForm