import styles from './style.module.scss';

const Title = () => (
  <h2 className={styles.Title}>
    <span style={{ display: 'block' }}>
      Alien
    </span>
    <span style={{ fontSize: '1.1em', display: 'block', marginTop: 15 }}>
      Attack!
    </span>
  </h2>
);

export default Title;
