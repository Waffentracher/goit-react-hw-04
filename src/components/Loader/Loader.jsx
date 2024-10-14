import { TailSpin } from 'react-loader-spinner';
import styles from '../Loader/Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.loader}>
      <TailSpin color="#00BFFF" height={80} width={80} />
    </div>
  );
}
