import PropTypes from 'prop-types';
import styles from './ImageModal.module.css';

export default function ImageModal({ isOpen, onClose, image }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <img src={image.urls.regular} alt={image.alt_description} className={styles.modalImage} />
      </div>
    </div>
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
