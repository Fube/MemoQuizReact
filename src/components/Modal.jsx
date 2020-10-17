import React from 'react';
import '../css/styles.css';

export default class Modal extends React.Component{

    render(){

        if(this.props.show){
            return (
                <div className="m0 flexCenter textCenter">     
                    <div className="blackBack m0">
                        { this.props.head }
                        { this.props.body }
                        <button onClick={ this.props.onBtnClick }>{ this.props.btnText }</button>
                    </div>
                </div>
            );
        }else{
            return <div></div>
        }
    }
}
