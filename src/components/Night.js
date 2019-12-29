import React, { Component } from 'react';
import styles from './Night.module.css';
import { Link } from 'react-router-dom';

import mae from '../images/mae.png'
import gregg from '../images/gregg.png'
import evilloh from '../images/evilloh.png'
import nightlogo from '../images/night logo1.png'
import dialogue1 from '../images/dialogo1.png'
import dialogue2 from '../images/dialogo2.png'
import dialogue3 from '../images/dialogo3.png'

class Night extends Component {
    constructor(props) {
        super(props);
        this.state = { active: 0 };
      }
    
      activeDialogue = arg => {
          this.setState({ active: arg });
      };

    render() { 
        return ( 
            <div className={styles.nightContainer}>
                <div className={styles.blackbg}></div>
                <img src={mae} className={styles.mae}  onClick={() => this.activeDialogue(1)} alt='Mae'></img>
                <img src={gregg} className={styles.gregg} onClick={() => this.activeDialogue(2)} alt='Gregg'></img>
                <img src={evilloh} className={styles.evilloh} onClick={() => this.activeDialogue(3)} alt='evilloh'></img>
                <img src={dialogue1} className={ `${styles.dialogue1}  ${ this.state.active === 1 ? styles.dialogueon : styles.dialogueoff }`} alt='dialogue'></img>
                <img src={dialogue2} className={`${styles.dialogue2}  ${ this.state.active === 2 ? styles.dialogueon : styles.dialogueoff }`} alt='dialogue'></img>
                <img src={dialogue3} className={`${styles.dialogue3}  ${ this.state.active === 3 ? styles.dialogueon : styles.dialogueoff }`} alt='dialogue'></img>
                <Link to='/'>
                    <img src={nightlogo} className={styles.logo} alt='night in the woods logo'></img>
                </Link>
            </div>
         );
    }
}
 
export default Night;