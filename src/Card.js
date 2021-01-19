import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './Card.module.css'

function Card() {
    
    
  const [info, setInfo]= useState([])
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
        
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          {info.map(info => (
            <span className={styles.cards}>

              <div className={styles.picture}>
                <img src={info.pic} alt=''></img>
              </div>
              <div className={styles.name}>
                <p>{info.firstName} {info.lastName}</p>
              </div>
              <div className={styles.email}>
                <p >Email: {info.email}</p>
              </div>
              <div className={styles.company}>
                <p >Company: {info.company}</p>
              </div>
              <div className={styles.skill}>
              <p >Skill: {info.skill}</p>
              </div>
              <div className={styles.average}>
                <p >Average: {info.grades}</p>
              </div>
              
            </span>
          ))} 
        </div>    
        </div>
    )
}

export default Card
