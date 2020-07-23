/**
 * View Countdown block
 * @module components/Blocks/Countdown/View
 */
import React from 'react';
import Timer from 'react-compound-timer';
import moment from 'moment';


const View = () => {
    return (
        <section className="title-block countdown">
            <aside>
                <h3>The community is waiting for you</h3>
                <a href="" className="button-yellow">Register now !</a>
            </aside>
            <article className="block-element">
                <span className="subtitle">Join us for </span>
                <h2>this new plone conference</h2>
                <div className="timer">
                    <Timer
                        initialTime={moment([2020, 11, 16]).format('x') - moment().utc().format('x')}
                        direction="backward">
                        {() => (
                            <React.Fragment>
                                <div className="days-n">
                                    <Timer.Days />
                                </div>
                                <div className="days-b">
                                    days
                            </div>

                                <div className="hours-n">
                                    <Timer.Hours />
                                </div>
                                <div className="hours-b">
                                    hours
                            </div>

                                <div className="minutes-n">
                                    <Timer.Minutes />
                                </div>
                                <div className="minutes-b">
                                    minutes
                            </div>

                                <div className="seconds-n">
                                    <Timer.Seconds />
                                </div>
                                <div className="seconds-b">
                                    seconds
                            </div>
                            </React.Fragment>
                        )}
                    </Timer>
                </div>
            </article>
        </section>
    );
};

export default View;