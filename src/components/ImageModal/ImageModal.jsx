import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styles from './ImageModal.module.css';

export default function ImageModal({ isOpen, onClose, image }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
      ariaHideApp={false}
    >
      <button onClick={onClose} className={styles.closeButton}>
        ×
      </button>
      <img
        src={image.urls.regular}
        alt={image.alt_description || 'Modal Image'}
        className={styles.modalImage}
      />
    </ReactModal>
  );
}

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  image: PropTypes.shape({
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
  }).isRequired,
};
