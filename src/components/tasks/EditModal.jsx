import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  title: yup.string().required('Title is required').min(3, 'Min 3 characters'),
  description: yup.string().optional(),
})

function EditModal({ task, onClose, onSave }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { title: task.title, description: task.description }
  })

  const onSubmit = (data) => { onSave(data); onClose() }

  return (
    <div onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 999, backdropFilter: 'blur(4px)' }}>
      <div style={{ background: 'white', borderRadius: '20px', padding: '36px', width: '100%', maxWidth: '460px', boxShadow: '0 20px 60px rgba(0,0,0,0.2)', position: 'relative' }}>
        
        <button onClick={onClose} style={{ position: 'absolute', top: '14px', right: '14px', background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer' }}>✕</button>

        <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>✏️ Edit Task</h2>
        <p style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '24px' }}>Update your task details</p>

        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div>
            <input {...register('title')} placeholder="Task title *"
              style={{ width: '100%', border: errors.title ? '1px solid #ef4444' : '1px solid #e2e8f0', borderRadius: '12px', padding: '12px 16px', fontSize: '14px', outline: 'none', background: '#f8fafc', boxSizing: 'border-box' }}
            />
            {errors.title && <p style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.title.message}</p>}
          </div>
          <input {...register('description')} placeholder="Description (optional)"
            style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '12px 16px', fontSize: '14px', outline: 'none', background: '#f8fafc' }}
          />
          <button type="submit" style={{ background: '#0f172a', color: 'white', border: 'none', borderRadius: '12px', padding: '14px', fontSize: '14px', fontWeight: '700', cursor: 'pointer' }}>
            ✅ Update Task
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditModal