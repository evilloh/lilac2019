import React, { Component } from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import Joystick from './joystick'

import night from '../images/evilloh.png'
import celeste from '../images/evillohgif.gif'
import lilacicon from '../images/lilacicon.png'
import { useHistory } from "react-router-dom";



class Persona extends Component {
    state = { classNight: 'thirdLev', classLilac: 'firstLev', classCeleste: 'secondLev', selected: '/celeste'}
    moveRight = () => {
        if ( this.state.classNight == 'thirdLev') {
            this.setState({classNight : 'firstLev', classCeleste : 'thirdLev', classLilac : 'secondLev', selected: '/persona'})
        } else if ( this.state.classNight == 'firstLev' ){
            this.setState({classNight : 'secondLev', classCeleste : 'firstLev', classLilac : 'thirdLev', selected: '/nightinthewoods'})
        } else {
            this.setState({classNight : 'thirdLev', classCeleste : 'secondLev', classLilac : 'firstLev', selected: '/celeste'})
        }
      }
    
      moveLeft = () => {
        if ( this.state.classNight == 'thirdLev') {
            this.setState({classNight : 'secondLev', classCeleste : 'firstLev', classLilac : 'thirdLev', selected: '/nightinthewoods'})
        } else if ( this.state.classNight == 'firstLev' ){
            this.setState({classNight : 'thirdLev', classCeleste : 'secondLev', classLilac : 'firstLev',  selected: '/celeste'})
        } else {
            this.setState({classNight : 'firstLev', classCeleste : 'thirdLev', classLilac : 'secondLev', selected: '/persona'})
        }
      }
      

    render() { 
        return ( 
            <div className={styles.homeContainer}>
                <div className={styles.oval}></div>
                <h2 className={styles.homeTitle}>Seleziona un livello</h2>
                {this.state.classNight === 'secondLev' && (
                <h2 className={styles.levelTitle}>Miglior gioco regalato</h2>
                )}
                {this.state.classCeleste === 'secondLev' && (
                    <h2 className={styles.levelTitle}>Miglior gioco consigliato</h2>
                )}
                {this.state.classLilac === 'secondLev' && (
                    <h2 className={styles.levelTitle}>Vincitore Lilac 2019</h2>
                )}
                <div className={styles.bubblesContainer} >
                    <img style={{order : this.state.orderNight }} src={night} className={`${styles.bubble} ${this.state.classNight}`}  alt='evilloh night in the woods'></img>
                    <img src={celeste} className={`${styles.bubble} ${this.state.classCeleste}`} alt='evilloh pixel art'></img>
                    <img src={lilacicon} className={`${styles.bubble} ${this.state.classLilac}`} alt='interrogation point'></img>
                </div>

                <Joystick moveRight={this.moveRight} moveLeft={this.moveLeft} selected={this.state.selected}/>
            </div>
         );
    }
}
 
export default Persona;