import React, { Component } from 'react';
import styles from './Persona.module.css';

import evillohPersona from '../images/evillohpersona.png'
import downcornice from '../images/cornicebassa.png'
import upcornice from '../images/cornicealta.png'
import sent1 from '../images/first.png'
import sent2 from '../images/second.png'
import sent3 from '../images/third.png'
import sent1inv from '../images/firstinv.png'
import sent2inv from '../images/secondinv.png'
import sent3inv from '../images/thirdinv.png'
import logoPersona from '../images/Persona_5_logo.png'
import rightOverlay from '../images/right_overlay.png'
import homeIcon from '../images/lilac_persona.png'
import video from '../video/persona5video.mp4'

import { Link } from 'react-router-dom';



class Persona extends Component {
    state = {desc1 : false, desc2: false, desc3: false, sent1: true, sent2: true, sent3: true, firstLoad: true }
    sent = (arg) => {
        const desc = `desc${arg}`;
        console.log(arg)
        // this.setState({desc : !this.state.desc})
        if (arg === 1){
            this.setState((state, props) => ({
                sent1: !state.sent1, desc1: !state.desc1, desc2: false, sent2: true, desc3: false, sent3: true,
            }));
        }
        if (arg === 2){
            this.setState((state, props) => ({
                sent2: !state.sent2, desc2: !state.desc2, desc1: false, sent1: true, desc3: false, sent3: true,
            }));
        }
        if (arg === 3){
            this.setState((state, props) => ({
                sent3: !state.sent3, desc3: !state.desc3, desc2: false, sent2: true, desc1: false, sent1: true,
            }));
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                firstLoad: false});
          }, 4500)
        // this.setState({
        //     firstLoad: false
        //   });
    }
    render() { 
        return ( 
            <div className={styles.personaContainer} >
                <div className={styles.blackbg}></div>
                <video autoPlay muted loop className={styles.video} style={{opacity: .4}}>
                    <source src={video} type="video/mp4"/>
                </video>
                <Link to='/'>
                    <img src={homeIcon} className={styles.homeIcon} alt='home icon persona5'></img>
                </Link>
                <img src={evillohPersona} className={styles.evillohPersona} alt='evilloh persona'></img>
                <img src={downcornice} className={styles.downcornice} alt='overlay'></img>
                <img src={upcornice} className={styles.upcornice} alt='overlay'></img>
                {this.state.sent1 && (                
                <img src={sent1} className={`${styles.sent1} ${this.state.firstLoad && styles.firstLoadDialogue1}`} alt='overlay' style={{zIndex: this.state.zIndex1}} onClick={() => this.sent(1)}></img>
                )}
                {this.state.sent2 && (
                <img src={sent2} className={`${styles.sent2} ${this.state.firstLoad && styles.firstLoadDialogue2}`} alt='overlay' style={{zIndex: this.state.zIndex2}} onClick={() => this.sent(2)}></img>
                )}
                {this.state.sent3 && (
                <img src={sent3} className={`${styles.sent3} ${this.state.firstLoad && styles.firstLoadDialogue3}`} alt='overlay' style={{zIndex: this.state.zIndex3}} onClick={() => this.sent(3)}></img>
                )}
                {!this.state.sent1 && (                
                <img src={sent1inv} className={`${styles.sent1} ${this.state.desc1 && 'sent1sel'}`} alt='overlay' onClick={() => this.sent(1)}></img>
                )}
                {!this.state.sent2 && (
                <img src={sent2inv} className={`${styles.sent2} ${this.state.desc2 && 'sent2sel'}`} alt='overlay' onClick={() => this.sent(2)}></img>
                )}
                {!this.state.sent3 && (
                <img src={sent3inv} className={`${styles.sent3} ${this.state.desc3 && 'sent3sel'}`} alt='overlay' onClick={() => this.sent(3)}></img>
                )}
                <img src={rightOverlay} className={styles.rightOverlay} alt='overlay'></img>

                <div className={styles.descriptionContainer}>
                    <img src={logoPersona} className={styles.logoPersona} alt='persona 5 logo' ></img>
                
                {this.state.desc1 && (
                    <p>Fin dalla prima ora si capisce subito quanto lavoro di art design è stato impiegato qua dentro. La musica, l'atmosfera, tutto lo stile di qualsiasi cristo di cosa. Loading screen, ogni cosa che vedi, che leggi, ogni menu, ogni scritta è stata pensata e disegnata su misura. Graficamente è come se ci fosse un horror vacui, ci sono tantiiiiisssimi dettagli e tutto fa apparire il mondo super ricchissimo di cose.</p>
                )}
                {this.state.desc2 && (
                    <p>E' stato il mio primo Persona game quindi per me è stato il primo gioco di questo genere, ma ho capito perchè a tanta gente piace. Oltre alla parte gdr/combattimenti c'è la parte gdr/life che e' super ben organizzata, profondita' e varieta' su ogni livello santapeppa.</p>
                )}
                {this.state.desc3 && (                        
                <p>Il gioco è tipo la perfezione del genere. E' immenso, ricco di storia, gameplay e soprattutto un orgasmo dal punto di vista di game design.  Cioè ho combattuto una guardia che era un demone seduto sulla tazza del cesso. Non so perchè ma non ho bisogno di spiegazioni. </p>
                )}
                </div>
                
            </div>
         );
    }
}
 
export default Persona;