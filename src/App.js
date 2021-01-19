import styles from './App.module.css';
import IndividualCards from './IndividualCards';





function App() {
  
  return (
    <div className={styles.app}>

      < div className={styles.app__body}>
          {/* <Results /> */}
          <IndividualCards />
        
      </div>
    </div>
  
  )
}

export default App
