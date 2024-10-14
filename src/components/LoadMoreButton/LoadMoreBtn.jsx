import PropTypes from 'prop-types';
import styles from '../LoadMoreButton/LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      Load more
    </button>
  );
}
LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};