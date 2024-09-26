import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.userContainer}>
      <div className={styles.userProfile}>
        <img className={styles.icon} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.fvl}>Followers</span>
          <span className={styles.stats}>{stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.fvl}>Views</span>
          <span className={styles.stats}>{stats.views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.fvl}>Likes</span>
          <span className={styles.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
