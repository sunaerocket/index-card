import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export function createCards() {
  const files = fs.readdirSync(path.resolve('./cards'));

  const cards = Promise.all(
    files.map(async (filename) => {
      const id = filename.replace('.md', '');
      const readFile = fs.readFileSync(path.resolve('./cards', filename), 'utf8');
      const {
        data: { title, tags },
        content,
      } = matter(readFile);

      const answer = await remark().use(html).process(content);

      return {
        id,
        title,
        tags,
        answer: answer.toString(),
      };
    }),
  );

  return cards;
}

export function getAllTags() {
  const files = fs.readdirSync(path.resolve('./cards'));

  const tags = files.map((filename) => {
    const readFile = fs.readFileSync(path.resolve('./cards', filename), 'utf8');
    const {
      data: { tags },
    } = matter(readFile);

    return tags;
  });

  const allTags = [...new Set(tags.flat())];

  return allTags;
}
