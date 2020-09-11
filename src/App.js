import React, { Component } from 'react';
import Screen from './components/Screen';
import KeyPad from './components/KeyPad';
import './App.css'

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        } else if(button === "clear"){
            this.reset()
        } else {
            this.setState({
                result: this.state.result + button
            })
        }
    }

    calculate = () => {
        try {
            this.setState({
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })
        }
    }

    reset = () => {
        this.setState({
            result: ""
        })
    }

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div class="calculator-body">
                    <Screen result={this.state.result}/>
                    <KeyPad onClick={this.onClick}/>
                </div>
            </div>
        )
    }
}

export default App