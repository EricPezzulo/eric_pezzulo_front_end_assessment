import axios from 'axios';
import React, { useEffect, useState } from 'react';
import IndividualCards from './IndividualCards';
import styles from './NewCard.module.css';


function NewCard() {


    const[info, setInfo] = useState([])
    const url = 'https://api.hatchways.io/assessment/students'


    useEffect(() => {
        const fetchInfo = async () => {
          try{      
            const result = await axios(url);
            console.log(result.data);
            setInfo(result.data.students); 
            } catch (error) {
              console.log(error)
            }
        }
          fetchInfo()
        }, [])

    return (
        < div className={styles.card}>
            <div className={styles.picture}>
                <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" alt=''></img>
            </div>
              <div className={styles.name}>
                <p className={styles.name}>{info.name}</p>
              </div>
              <div className={styles.email}>
                <p >Email: </p>
              </div>
              <div className={styles.company}>
                <p >Company: </p>
              </div>
              <div className={styles.skill}>
              <p >setInfo </p>
              </div>
              <div className={styles.average}>
                <p >Average: </p>
              </div>
        </div>   
            
        
    )
}

export default NewCard
