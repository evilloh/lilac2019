import React, { Component } from 'react';
import './Joystick.css';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

class Joystick extends Component {
  state = {  }
  

  render() { 
    return ( 
<div>
<main>
   <section className="joystick center">
      <div className="animations">      
         <aside className="left-hand">
            <div className="controler">
               <button className="left"  onClick={() => this.props.moveLeft()}><i></i></button>
               <button className="top"><i></i></button>
               <button className="right" onClick={() => this.props.moveRight()}><i></i></button>
               <button className="bottom"><i></i></button>
            </div>
         </aside>

         <div className="body-control">
            <div>
               <p>Lillapad2019</p>
            </div>
            <button></button>
            <button></button> 
         </div>

         <aside className="right-hand">
            <div className="controler">

            <div className="actions group1">
               <label className="green"  onClick={() =>  this.props.history.push(this.props.selected)}></label>
               <label className="blue" onClick={() =>  this.props.history.push(this.props.selected)} ></label>
            </div>
            <div className="actions group2">
               <label className="yellow" onClick={() =>  this.props.history.push(this.props.selected)} ></label>
               <label className="red" onClick={() =>  this.props.history.push(this.props.selected)} ></label>
            </div>
            </div>
         </aside>
         <div className="l1 backside-buttons">
            <button></button>
         </div>
         <div className="r1 backside-buttons">
            <button></button>
         </div>
         
         <div className="stroke-base"></div>
         
      </div>
   </section>
   <div className="fio"></div>
</main>
<div className="colors bg-green"  ></div>
<div className="colors bg-blue"></div>
<div className="colors bg-yellow"></div>
<div className="colors bg-red"></div>
<div className="basecolor"></div>
</div>
      );
    }
}
 
export default  withRouter(Joystick);