import { useEffect, useState } from 'react';
import styles from './App.module.css';
import axios from 'axios';

function App() {
  
  const [info, setInfo]= useState([])

  const url = 'https://api.hatchways.io/assessment/students'


  useEffect(() => {
    const fetchInfo = async () => {
      const result = await axios(url)

      console.log(result.data)
      setInfo(result.data)
    }
    fetchInfo()
  }, [])


  return (
    <div className={styles.app}>
      
      
        {info.map(students => (
          <p>{students.city}</p>
          
        ))} 
  
        
    
    </div>
  
  )
}

export default App;
