import Modal from './Modal'

function GalleryModal({ open, onClose, item }) {
  return (
    <Modal open={open} onClose={onClose} title="Gallery image preview" contentClassName="max-w-5xl">
      {item ? (
        <div className="bg-slate-950 p-2 sm:p-4">
          <img
            src={item.image}
            alt={`${item.title} at ${item.event}`}
            className="max-h-[72vh] w-full rounded-2xl object-contain"
          />
          <p className="mt-3 text-center font-heading text-lg font-bold text-white">{item.title}</p>
          <p className="text-center text-sm text-slate-300">{item.event}</p>
        </div>
      ) : null}
    </Modal>
  )
}

export default GalleryModal
