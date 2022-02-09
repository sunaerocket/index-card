import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Navigation.module.css';

export default function Navigation({ progress, onClickNext, onClickPrev }) {
  return (
    <div className={styles.navigation}>
      <FontAwesomeIcon icon={faChevronLeft} onClick={onClickPrev} />
      <span>
        {progress.current}/{progress.total}
      </span>
      <FontAwesomeIcon icon={faChevronRight} onClick={onClickNext} />
    </div>
  );
}
