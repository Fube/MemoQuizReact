import React from 'react';
import '../App.css';
import '../css/styles.css';
import QuizPage from './QuizPage';
import Modal from './Modal'

export default class StartPage extends React.Component{

    state = {
        showModal : false,
    }

    render(){
        return (
            <div>
                <QuizPage text="The Ultimate Nemo Trivia" start="Start" handleStart={this.props.handleStart}>
                    <div>
                        <button className="startBtn" onClick={() => ( this.setState({ showModal: true }), this.props.handleStart() )}>Start</button>
                    </div>
                </QuizPage>
                <Modal 
                    head={ <h1>I am the head</h1> } 
                    body={ <p>I am the body</p> } 
                    show={ this.state.showModal } 
                    onBtnClick = { this.props.handleStart } btnText="Start"
                />
            </div>
        );
    }
}