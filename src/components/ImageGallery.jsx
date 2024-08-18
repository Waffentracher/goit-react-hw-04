import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onClick }) => (
  <div className={styles.imageGallery}>
    {images.map(image => (
      <div
        key={image.id}
        className={styles.imageCard}
        onClick={() => onClick(image)}
      >
        <img
          src={image.urls.small}
          alt={image.alt_description}
          className={styles.image}
        />
      </div>
    ))}
  </div>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      urls: PropTypes.shape({
        small: PropTypes.string.isRequired,
      }).isRequired,
      alt_description: PropTypes.string,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
