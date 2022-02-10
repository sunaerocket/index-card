import React, { useState } from 'react';

import Head from 'next/head';

import IndexCardContainer from '../components/IndexCardContainer';
import TagContainer from '../components/TagContainer';

import { createCards, getAllTags } from '../lib/createCards';

import styles from '../styles/Home.module.css';

export default function Home({ cards, tags }) {
  const [currentTag, setCurrentTag] = useState('all');
  const [currentCards, setCurrentCards] = useState(cards);

  const handleTagClick = (tag) => {
    setCurrentTag(tag);
    const filteredCards = tag === 'all' ? cards : cards.filter((card) => card.tags.includes(tag));
    setCurrentCards(filteredCards);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>인덱스 카드</title>
        <meta name="description" content="기억력을 보조해주는 인덱스 카드" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TagContainer tags={tags} currentTag={currentTag} onTagClick={handleTagClick} />
        <div className={styles.grid}>
          <IndexCardContainer cards={currentCards} />
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const cards = await createCards();
  const tags = getAllTags();

  return {
    props: {
      cards,
      tags,
    },
  };
}
