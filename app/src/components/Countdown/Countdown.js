import React, { Component } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import './Countdown.css';
import 'react-circular-progressbar/dist/styles.css';

dayjs.extend(relativeTime);

class Countdown extends Component {

    componentDidMount() {
        // Update the page every hour
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000 * 60 * 60);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render () {
        const startTime = dayjs(this.props.startDate);
        const endTime = dayjs(this.props.targetDate);

        const daysElapsed = Math.ceil(dayjs().diff(startTime, 'days'));
        const daysLeft = -1 * Math.ceil(dayjs().diff(endTime, 'days'));

        let dayString = '';
        if (daysLeft > 1) {
            dayString = 'days left';
        } else if (daysLeft === 1) {
            dayString = 'day left!';
        } else if (daysLeft === 0) {
            dayString = `it's today!`;
        } else if (daysLeft < 0) {
            dayString = 'day(s) ago';
        }

        // CircularProgressbar needs the percentage in a 0-100 scale, not 0-1
        const percentage = (daysElapsed / (daysElapsed + daysLeft)) * 100;

        const diameter = Math.PI * 2 * pathRadius;
        const gapLength = (1 - dashRatio) * diameter;
        console.log(`${gapLength}px`);

        return (
            <div id='countdown'>
                <CircularProgressbarWithChildren
                    className='progress-bar'
                    value={percentage}>
                    <div className='inner-text'>
                        <div className='number'>{Math.abs(daysLeft)}</div>
                        <div className='text'>{dayString}</div>
                    </div>
                </CircularProgressbarWithChildren>
            </div>
        )
    }

}

export default Countdown;
