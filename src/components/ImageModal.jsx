import PropTypes from 'prop-types';
import Modal from 'react-modal';

const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      ariaHideApp={false}
      style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
        content: { 
          top: '50%', 
          left: '50%', 
          right: 'auto', 
          bottom: 'auto', 
          marginRight: '-50%', 
          transform: 'translate(-50%, -50%)',
          maxWidth: '90%',
          maxHeight: '90%',
          padding: '0',
          border: 'none',
          borderRadius: '10px',
          overflow: 'hidden',
        },
      }}
    >
      <img src={image.urls.regular} alt={image.alt_description} style={{ width: '100%', height: 'auto' }} />
    </Modal>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
};

export default ImageModal;
