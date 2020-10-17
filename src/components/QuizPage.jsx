import React from 'react';
import '../App.css';
import '../css/styles.css';

export default class QuizPage extends React.Component{

    render(){

        return(
            <div className="pinkBack" style={{marginLeft: `10vw`, marginTop: `20vh`}}>
                <h1>{ this.props.text }</h1>
                <ul className="m0">
                    { (this.props.choices || []).map( (n, i) => 
                        <li key={ i }>
                            <input onClick={ (e) => e.currentTarget.value == 'correct' ? this.props.handleCorrectChoice() : this.props.handleWrongChoice()} type="radio" name={this.props.name} value={n.value}/>
                            { n.text }
                        </li>
                    )}
                </ul>
                { this.props.children }
            </div>
        );
    }
}