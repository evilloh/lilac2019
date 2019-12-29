import React, { Component } from 'react';
import styles from './Celeste.module.css';
import { Link } from 'react-router-dom';


import badeline from '../images/badelinegif.gif'
import celestelogo from '../images/celestelogo1.png'
import evillohgif from '../images/evillohgif.gif'
import celestebg1 from '../images/celestebg1.jpg'
import celestebg2 from '../images/celestebg2.jpg'
import celestebg3 from '../images/celestebg3.jpg'


class Persona extends Component {
    state = { bgUrl: celestebg1, opacity1: 0, opacity2: 0 }
    
    changeBg = arg => {
        if (arg === 1) {
            this.setState({ bgUrl: celestebg1 });
        } if (arg === 2) {
            this.setState({ bgUrl: celestebg2 });
        } else {
            this.setState({ bgUrl: celestebg3 });
        }
    };
    render() { 
        return ( 
            <div className={styles.celesteContainer}>
                <div className={styles.blackbg}></div>
                    <img src={evillohgif} className={styles.evilloh} style={{width:'80px'}} onMouseOut={() => this.setState({opacity1 : 0})} onMouseOver={() => this.setState({opacity1 : 1})} alt='evilloh'></img>
                    <img src={badeline} className={styles.badeline}  style={{width:'110px'}} onMouseOut={() => this.setState({opacity2 : 0})} onMouseOver={() => this.setState({opacity2 : 1})} alt='badeline'></img>
                <img src={celestebg1} className={styles.celestebg1} style={{opacity:`1`}} />
                <img src={celestebg2} className={styles.celestebg2} style={{opacity:`${this.state.opacity2}`}} />
                <img src={celestebg3} className={styles.celestebg3} style={{opacity:`${this.state.opacity1}`}} />
                <Link to='/'>
                        <img src={celestelogo} className={styles.logo} alt='celeste logo'></img>
                </Link>
            </div>
         );
    }
}
 
export default Persona;