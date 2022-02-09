import React, { useState } from 'react';

import cs from 'classnames';

import styles from '../styles/IndexCard.module.css';

export default function IndexCard({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={isFlipped ? cs(styles.card, styles.flip) : styles.card} onClick={() => setIsFlipped(!isFlipped)}>
      <div className={styles.front}>
        <h1>{card.title}</h1>
      </div>
      <div className={styles.back} dangerouslySetInnerHTML={{ __html: card.answer }} />
    </div>
  );
}
