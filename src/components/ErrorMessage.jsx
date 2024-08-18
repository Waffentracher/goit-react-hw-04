import PropTypes from 'prop-types';
import styles from '../components/ErrorMessage.module.css';

export default function ErrorMessage({ message }) {
  return (
    <div className={styles.error}>
      {message}
    </div>
  );
}
ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};