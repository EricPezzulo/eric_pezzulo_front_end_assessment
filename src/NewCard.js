import styles from './NewCard.module.css';

function NewCard({ student }) {
  const getAverageGrades = (gradesArray) => {
    let result = 0;
    let numOfGrades = gradesArray.length;
    gradesArray.forEach((grade) => (result = Number(result) + Number(grade)));
    return result / numOfGrades;
  };

  return (
    <div className={styles.card}>
      <div className={styles.picture}>
        <img
          // https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png
          src={student.pic}
          alt='profile'
        />
      </div>
      <div className={styles.name}>
        <p className={styles.name}>Name: {student.firstName}</p>
      </div>
      <div className={styles.email}>
        <p>Email: {student.email}</p>
      </div>
      <div className={styles.company}>
        <p>Company: {student.company}</p>
      </div>
      <div className={styles.skill}>
        <p>Skill: {student.skill}</p>
      </div>
      <div className={styles.average}>
        <p>Average: {getAverageGrades(student.grades)}</p>
      </div>
    </div>
  );
}

export default NewCard;
