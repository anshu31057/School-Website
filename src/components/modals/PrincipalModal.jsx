import Modal from './Modal'

function PrincipalModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} title="Message from Principal" contentClassName="max-w-3xl">
      <div className="grid md:grid-cols-[1fr_1.2fr]">
        <img
          src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=70"
          alt="Dr. Eleanor Matthews, Principal"
          loading="lazy"
          className="h-72 w-full object-cover md:h-full"
        />
        <div className="p-6 md:p-8">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-secondary">Message from Principal</p>
          <h3 className="mt-3 font-heading text-2xl font-extrabold text-primary">Dr. Eleanor Matthews</h3>
          <p className="text-sm font-medium text-slate-600">Principal, Blue Ridge Academy</p>
          <p className="mt-5 text-sm leading-relaxed text-slate-700">
            At Blue Ridge Academy, every learner is seen, challenged, and supported. We foster disciplined scholarship, curiosity-driven inquiry,
            and compassionate leadership so our students grow into confident global citizens. Our mission is to shape not only academic outcomes,
            but character and purpose for life.
          </p>
        </div>
      </div>
    </Modal>
  )
}

export default PrincipalModal
