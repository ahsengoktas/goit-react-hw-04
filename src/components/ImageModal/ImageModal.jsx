import Modal from 'react-modal';
import css from './ImageModal.module.css';

function ImageModal({ image, onClose }) {
  return (
    <Modal
      isOpen={Boolean(image)}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      {image && (
        <img
          className={css.image}
          src={image.urls.regular}
          alt={image.alt_description || 'Unsplash image'}
        />
      )}
    </Modal>
  );
}

export default ImageModal;
