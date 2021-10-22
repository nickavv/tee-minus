import React, { Component } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import './Countdown.css';

dayjs.extend(relativeTime);

class Countdown extends Component {

    render () {
        const startTime = dayjs(this.props.startDate);
        const endTime = dayjs(this.props.targetDate);

        const daysElapsed = Math.ceil(dayjs().diff(startTime, 'days'));
        const daysLeft = -1 * Math.ceil(dayjs().diff(endTime, 'days'));

        let dayString = '';
        if (daysLeft > 1) {
            dayString = `${daysLeft} days`;
        } else if (daysLeft === 1) {
            dayString = `${daysLeft} day`;
        } else if (daysLeft === 0) {
            dayString = `Today!`;
        } else if (daysLeft < 0) {
            dayString = `${Math.abs(daysLeft)} day(s) ago`;
        }

        const percentage = daysElapsed / (daysElapsed + daysLeft);

        return (
            <div id='countdown'>
                {dayString}  {percentage}
            </div>
        )
    }

}

export default Countdown;
