import React, { Component } from 'react';
import styles from './Persona.module.css';

import evillohPersona from '../images/evillohpersona.png'
import downcornice from '../images/cornicebassa.png'
import upcornice from '../images/cornicealta.png'
import descriptionContainer from '../images/description_container.png'
import sent1 from '../images/sent1.png'
import sent2 from '../images/sent2.png'
import sent3 from '../images/sent3.png'
import logoPersona from '../images/Persona_5_logo.png'
import rightOverlay from '../images/right_overlay.png'
import video from '../video/persona5video.mp4'
import Icon from "./Dialogueicon";


class Persona extends Component {
    state = { fill1: "#fdfjkoa", fill2 : "#fff" }
    shoot = () => {
        if (this.state.fill1 === "#fdfjkoa") {
            this.setState({fill1 : "#fff", fill2 : "#fdfjkoa"})
        } else {
            this.setState({fill2 : "#fff", fill1 : "#fdfjkoa"})
        }
    }
    render() { 
        return ( 
            <div className={styles.personaContainer} >
                <video autoPlay muted loop className={styles.video} style={{opacity: .4}}>
                    <source src={video} type="video/mp4"/>
                </video>
                <img src={evillohPersona} className={styles.evillohPersona} alt='evilloh persona'></img>
                <img src={downcornice} className={styles.downcornice} alt='overlay'></img>
                <img src={upcornice} className={styles.upcornice} alt='overlay'></img>
                <img src={sent1} className={styles.sent1} alt='overlay'></img>
                <img src={sent2} className={styles.sent2} alt='overlay'></img>
                <img src={sent3} className={styles.sent3} alt='overlay'></img>
                <img src={logoPersona} className={styles.logoPersona} alt='persona 5 logo' ></img>
                <img src={rightOverlay} className={styles.rightOverlay} alt='overlay'></img>
                <Icon className="casa" fill1={this.state.fill1} fill2={this.state.fill2} onClick={() => this.shoot()}/>

                <div className={styles.descriptionContainer}>
                    <p>Fin dalla prima ora si capisce subito quanto lavoro di art design è stato impiegato qua dentro. La musica, l'atmosfera, tutto lo stile di qualsiasi cristo di cosa. Loading screen, ogni cosa che vedi, che leggi, ogni menu, ogni scritta è stata pensata e disegnata su misura. </p>
                    <p>Graficamente è come se ci fosse un horror vacui, ci sono tantiiiiisssimi dettagli che è impossibile cogliere e tutto fa apparire il mondo super ricchissimo di cose.</p>
                    <p>Cioè ho combattuto una guardia che era un demone seduto sulla tazza del cesso. Non so perchè ma non ho bisogno di spiegazioni. </p>
                </div>
                
            </div>
         );
    }
}
 
export default Persona;