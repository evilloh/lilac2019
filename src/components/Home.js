import React, { Component } from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

class Persona extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.homeContainer}>
                <h1 className={styles.homeTitle}>Lilac 2019</h1>
                <p>La premiazione del lilac di questo anno verrà suddivisa in cinque sezioni, ognuna dedicata a un vincitore in particolare </p>
                <Link to='/persona'>Persona</Link>
                <Link to='/nightinthewoods'>Night in the woods</Link>
            </div>
         );
    }
}
 
export default Persona;