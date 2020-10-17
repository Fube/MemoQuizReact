import React from 'react';
import QuizPage from './QuizPage';
import '../css/styles.css';

export default class EndPage extends React.Component{

    getRanking = (score) => {

        if(score >= 80){
            return (
                <div>
                    <h1>100 pts - 80 pts</h1>
                    <p>Claim your bragging rights because you're now labeled as Finding Nemo's # 1 aficionado.</p>
                </div>
            )
        }else if(score >= 50){
            return (
                <div>
                    <h1>70 pts - 50 pts</h1>
                    <p>You know just enough to be able to hold a conversation at a Nemo Convention but not enough for a lecture at a Marine Biology Confrence</p>
                </div>
            );
        }else{
            return (
                <div>
                    <h1>40 pts - 0 pts</h1>
                    <p>Stay home and do some studying so you don't publicly embarrass yourself. 😜</p>
                </div> 
            );
        }
    }

    render(){

        return (
            <div className="marginCenter pinkBack">
                <h1>Your ranking is:</h1>
                { this.getRanking(this.props.getScore()) }
                <div className="flexCenter m0">
                    <button className="m0" onClick={ this.props.reset }>Reset</button>
                </div>
            </div>
        );
    }
}
