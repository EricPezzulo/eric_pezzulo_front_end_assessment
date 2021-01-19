import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import styles from './Results.modules.css';

function Results( { info }) {

    const [information, setInformation] = useState([]);


    return (
        <div className={styles.results}>
           
                <Card />
            
            
        </div>
    )
}

export default Results;
