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
        <div className={styles.card__Contatiner}>
            

            <div className={styles.card__body}>
                {info.map(info => (
                    <span>
                        <img  className={styles.picture} src={info.pic} alt=''></img>
                        <p className={styles.name}>{info.firstName} {info.lastName}</p>
                        <p className={styles.small__text}>Email: {info.email}</p>
                        <p className={styles.small__text}>Company: {info.company}</p>
                        <p className={styles.small__text}>Skill: {info.skill}</p>
                        <p classname={styles.small__text}>Average: {info.grades}</p>
                    </span>
                ))}


                <div className={styles.card__info}>
                    
                </div>

            </div>
            
        </div>
    )
}

export default Card
