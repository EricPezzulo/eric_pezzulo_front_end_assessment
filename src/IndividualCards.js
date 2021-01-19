import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './IndividualCards.module.css'
import NewCard from './NewCard';

function IndividualCards() {

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
        <div className={styles.card}>
            {info.map((info) => (
                <NewCard />
            ))}
            
        </div>
    )
}

export default IndividualCards
