import React, {Component} from 'react';
import {Input} from './components/Input';
import {Button} from './components/Button';
import './App.css';
import * as math from 'mathjs';

const strong = num => num > 1 ? num*strong(num-1) : 1;

export default class App extends Component {
    state = {
        input: ''
    };

    handleClear = () => this.setState({input: ''});

    handleSubClear = () => this.setState(prevState => ({input: prevState.input.toString().slice(0,-1)}));

    handlePercent = () => this.setState(prevState => ({input: math.eval(prevState.input)/100}));

    handleEqual = () => this.setState(prevState => ({input: math.eval(prevState.input)}));

    handleSquare = () => this.setState(prevState => ({input: Math.pow(math.eval(prevState.input),2)}));

    handleRoot = () => this.setState(prevState => ({input: Math.sqrt(math.eval(prevState.input))}));

    handleInverse = () => this.setState(prevState => ({input: 1/math.eval(prevState.input)}));

    handleStrong = () => this.setState(prevState => ({input: strong(math.eval(prevState.input))}));

    addToInput = val => this.setState(prevState => ({input: prevState.input + (isNaN(val) ? this.addOperator(val) : val) }));

    addOperator = val => {
        if (this.state.input !== "" && !isNaN(this.state.input.toString().slice(-1))) {
            return val;
        }
        return "";
    };

    render() {
        return (
            <div className='app'>
                <div className='calc-wrapper'>
                    <Input input={this.state.input}/>
                    <div className='row'>
                        <Button handleClick={this.handlePercent}>%</Button>
                        <Button handleClick={this.handleRoot}>{"\u221a"}</Button>
                        <Button handleClick={this.handleSquare}>x{"\u00b2"}</Button>
                        <Button handleClick={this.handleInverse}>{"\u00b9"}{"\u2044"}{"\u00d7"}</Button>
                    </div>
                    <div className='row'>
                        <Button handleClick={this.handleClear}>C</Button>
                        <Button handleClick={this.handleSubClear}>{"\u21d0"}</Button>
                        <Button handleClick={this.handleStrong}>n!</Button>
                        <Button handleClick={this.addToInput}>{/*{"\u00f7"}*/}/</Button>
                    </div>
                    <div className='row'>
                        <Button handleClick={this.addToInput}>7</Button>
                        <Button handleClick={this.addToInput}>8</Button>
                        <Button handleClick={this.addToInput}>9</Button>
                        <Button handleClick={this.addToInput}>*</Button>
                    </div>
                    <div className='row'>
                        <Button handleClick={this.addToInput}>4</Button>
                        <Button handleClick={this.addToInput}>5</Button>
                        <Button handleClick={this.addToInput}>6</Button>
                        <Button handleClick={this.addToInput}>-</Button>
                    </div>
                    <div className='row'>
                        <Button handleClick={this.addToInput}>1</Button>
                        <Button handleClick={this.addToInput}>2</Button>
                        <Button handleClick={this.addToInput}>3</Button>
                        <Button handleClick={this.addToInput}>+</Button>
                    </div>
                    <div className='row'>
                        <Button handleClick={this.addToInput}>{"\u00b1"}</Button>
                        <Button handleClick={this.addToInput}>0</Button>
                        <Button handleClick={this.addToInput}>.</Button>
                        <Button handleClick={this.handleEqual}>=</Button>
                    </div>
                </div>
            </div>
        );
    }
}