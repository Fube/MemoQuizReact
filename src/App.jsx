import React from 'react';
import './App.css';
import './css/styles.css';
import StartPage from './components/StartPage';
import QuizPage from './components/QuizPage';
import EndPage from './components/EndPage';
import Modal from './components/Modal';

class App extends React.Component{

  handleStart = () => {

    if(this.state.showModal) this.handleCorrectChoice();
    this.setState({ showModal: !this.state.showModal });
  }

  handleWrongChoice = () => {

    const score = this.state.score - 10;

    if(score <= 0){
      this.setState({ score : 0, showFailModal: true });
      return;
    }

    this.setState({ score });
  };

  handleCorrectChoice = () => {
    
    const currentPage = this.state.currentPage + 1;
    const backgroundUrl = this.state.pages[currentPage].props.backgroundUrl;
    this.setState({ backgroundUrl, currentPage, showModal: false });
  };

  handleEndScore = () => {
    return this.state.score;
  };

  handleReset = () => {
    this.setState({ currentPage: 0, score: 100, showFailModal: false });
  };

  state = {
    score : 100,
    currentPage : 0,
  pages : [
      <StartPage                    backgroundUrl="https://i.imgur.com/dCNqqDN.jpg" handleStart={ this.handleStart }/>, 
      <QuizPage text="Question 1"   backgroundUrl="https://i.imgur.com/EVduQKU.jpg" name="q1" choices={[{text:'o1', value:'incorrect'}, {text:'o2', value:'correct'}]}/>,
      <QuizPage text="Question 2"   backgroundUrl="https://i.imgur.com/pl3hAI3.jpg" name="q2" choices={[{text:'o1', value:'incorrect'}, {text:'o2', value:'correct'}]}/>,
      <QuizPage text="Question 3"   backgroundUrl="https://i.imgur.com/pKX4kqW.jpg" name="q3" choices={[{text:'o1', value:'incorrect'}, {text:'o2', value:'correct'}]}/>,
      <QuizPage text="Question 4"   backgroundUrl="https://i.imgur.com/O0Bjf0l.jpg" name="q4" choices={[{text:'o1', value:'incorrect'}, {text:'o2', value:'correct'}]}/>,
      <QuizPage text="Question 5"   backgroundUrl="https://i.imgur.com/dx4a4xh.jpg" name="q5" choices={[{text:'o1', value:'incorrect'}, {text:'o2', value:'correct'}]}/>,
      <QuizPage text="Question 6"   backgroundUrl="https://i.imgur.com/Olpfzhe.jpg" name="q6" choices={[{text:'o1', value:'incorrect'}, {text:'o2', value:'correct'}]}/>,
      <QuizPage text="Question 7"   backgroundUrl="https://i.imgur.com/LuJLghu.jpg" name="q7" choices={[{text:'o1', value:'incorrect'}, {text:'o2', value:'correct'}]}/>,
      <QuizPage text="Question 8"   backgroundUrl="https://i.imgur.com/K24AJbh.jpg" name="q8" choices={[{text:'o1', value:'incorrect'}, {text:'o2', value:'correct'}]}/>,
      <QuizPage text="Question 9"   backgroundUrl="https://i.imgur.com/8QVbk29.jpg" name="q9" choices={[{text:'o1', value:'incorrect'}, {text:'o2', value:'correct'}]}/>,
      <QuizPage text="Question 10"  backgroundUrl="https://i.imgur.com/46ZUibm.jpg" name="q10" choices={[{text:'o1', value:'incorrect'}, {text:'o2', value:'correct'}]}/>,
      <EndPage                      backgroundUrl="https://i.imgur.com/XU11etd.jpg" getScore = { this.handleEndScore } reset = { this.handleReset }/>
    ],
    showModal : false,
    showFailModal: false,
  }

  createPage = (page) => {
    return React.cloneElement(page, {...page.props, handleCorrectChoice : this.handleCorrectChoice, handleWrongChoice : this.handleWrongChoice});
  }

  render(){

    return (
      <div style={{ backgroundImage: `url(${ this.state.pages[this.state.currentPage].props.backgroundUrl })`}} className="quizPage">
        <h1 className="m0 textCenter">Score: { this.state.score }</h1>
        <div>{ this.createPage(this.state.pages[this.state.currentPage]) }</div>
        <Modal 
          head={ <h1>You have FAILED</h1> }
          body={ <p>You can always try again...</p> }
          show={ this.state.showFailModal }
          onBtnClick={ this.handleReset } btnText="Restart"
        />
      </div>
    )
  }
}

export default App;