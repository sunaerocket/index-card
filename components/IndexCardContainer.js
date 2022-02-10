import React, { useState } from 'react';

import IndexCard from './IndexCard';
import Navigation from './Navigation';

export default function IndexCardContainer({ cards, currentIndex }) {
  return <IndexCard card={cards[currentIndex]} />;
}
