import React from 'react';
import { TestContext } from './testContext'
import './style.css';


var interval
class Timer extends React.Component {


    constructor() {
        super();
        this.state = {
            hour: 0,
            minute: 0,
            second: 0,
            isStart: false
        }

    }

    static contextType = TestContext;

    startInterval = () => {
        if (!this.state.isStart) {
            interval = setInterval(() => {
                this.setState({
                    isStart: true,
                    second: this.state.second + 1
                })
                if (this.state.second === 60) {
                    this.setState({
                        minute: this.state.minute + 1,
                        second: 0
                    })
                }
                if (this.state.minute === 60) {
                    this.setState({
                        hour: this.state.hour + 1,
                        minute: 0,
                        second: 0
                    })
                }
            }
                , 1000);
        }

    }

    stopInterval = () => {
        this.setState({
            isStart: false
        })
        clearInterval(interval)
    }

    resetInterval = () => {
        this.stopInterval()
        this.setState({
            hour: 0,
            minute: 0,
            second: 0

        })
    }

    handelsaveTime = () => {
        let timeNow = document.querySelector('.timer').innerHTML
        this.context.setTimeArr([...this.context.timeArr, timeNow])
    }


    render() {
        let h = this.state.hour
        let m = this.state.minute
        let s = this.state.second
        return (
            <>
                <h2 className='timer' onClick={this.handelsaveTime}>{`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s}`}</h2>
                <div>
                    <span className='greenButton' onClick={this.startInterval}>start</span>
                    <span className='redButton' onClick={this.stopInterval}>stop</span>
                    <span className='grayButton' onClick={this.resetInterval}>reset</span>
                    <span className='actionButton' onClick={this.props.handelsetIsLight}
                        style={{
                            background: this.props.isLight ? "black" : "white",
                            color: this.props.isLight ? "white" : "black"
                        }}>
                        {this.props.isLight ? "dark" : "light"}
                    </span>
                </div >
            </>
        )
    }
}
export default Timer;
