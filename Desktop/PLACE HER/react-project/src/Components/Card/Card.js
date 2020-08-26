import React, { Component } from 'react';

import './Card.css';


class Card extends Component {
    constructor(props) {
        super (props);
        this.state ={

        }
    }
    render(){
        return(
       <div className= 'card-container'>
           <div>
               <img src= {`https://robohash.org/${this.props.name}?200x200`} alt="robots"/>
           <div>
       </div> 
       <h4>{ this.props.name}</h4>
       <p>{ this.props.email }</p>
       </div>
       </div>
    );
};
}
export default Card;