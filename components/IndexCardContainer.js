import React, { useState } from 'react';

import IndexCard from './IndexCard';
import Navigation from './Navigation';

export default function IndexCardContainer({ cards }) {
  const [index, setIndex] = useState(0);

  const handleNextClick = () => {
    if (index >= cards.length - 1) {
      return;
    }

    setIndex(index + 1);
  };

  const handlePrevClick = () => {
    if (index <= 0) {
      return;
    }

    setIndex(index - 1);
  };

  const progress = {
    current: index + 1,
    total: cards.length,
  };

  return (
    <>
      <IndexCard card={cards[index]} />
      <Navigation progress={progress} onClickPrev={handlePrevClick} onClickNext={handleNextClick} />
    </>
  );
}
