/**
 * View Countdown block
 * @module components/Blocks/Countdown/Edit
 */
import React from 'react';
import Timer from 'react-compound-timer';
import moment from 'moment';

const View = props => {
  return <div><div>join us for</div><div>This new plone conference</div><Timer
    initialTime={moment([2020, 11, 16]).format('x') - moment().utc().format('x')}
    direction="backward">
    {() => (
        <React.Fragment>
            <Timer.Days /> days
            <Timer.Hours /> hours
            <Timer.Minutes /> minutes
            <Timer.Seconds /> seconds
        </React.Fragment>
    )}
    </Timer></div>;
};

export default View;
