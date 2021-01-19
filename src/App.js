import styles from './App.module.css';
import Results from './Results';




function App() {
  
  return (
    <div className={styles.app}>

      <div className={styles.app__body}>
        
        <div className={styles.app__contents}>
          <Results/>
        </div>
      </div>
    </div>
  
  )
}

export default App
