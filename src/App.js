import styles from './App.module.css';
import Card from './Card';




function App() {
  
  return (
    <div className={styles.app}>

      <div className={styles.app__body}>
        
        <div className={styles.app__contents}>
          <Card />
        </div>
      </div>
    </div>
  
  )
}

export default App
