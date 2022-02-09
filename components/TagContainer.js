import cs from 'classnames';
import styles from '../styles/Tag.module.css';

export default function TagContainer({ tags, currentTag, onTagClick }) {
  const isAll = currentTag === 'all';

  return (
    <ul className={cs(styles.tag, styles.container)}>
      <li
        className={isAll ? cs(styles.tag, styles.list, styles.current) : cs(styles.tag, styles.list)}
        onClick={() => onTagClick('all')}
      >
        전체
      </li>
      {tags.map((tag, index) => {
        const isCurrentTag = currentTag === tag;
        return (
          <li
            key={index}
            className={isCurrentTag ? cs(styles.tag, styles.list, styles.current) : cs(styles.tag, styles.list)}
            onClick={() => onTagClick(tag)}
          >
            {tag}
          </li>
        );
      })}
    </ul>
  );
}
