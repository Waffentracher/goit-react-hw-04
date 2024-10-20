import PropTypes from 'prop-types';
import styles from '../ImageCard/ImageCard.module.css';

const ImageCard = ({ image, onClick }) => (
  <li className={styles.imageCard}>
    <img
      src={image.urls.small}
      alt={image.alt_description}
      className={styles.image}
      onClick={() => onClick(image)}
    />
  </li>
);

ImageCard.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;