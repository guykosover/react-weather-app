import React, {Component} from 'react';
import './Forecast1Day.css'


class Forecast1Day extends Component {

    render() {

        const days= ["Sunday", "Monday", "Tuesday" ,"Wednesday", "Thursday", "Friday","Suterday"]

        return (
            <div className="ForcastDay">
                <h1>{days[this.props.day]}</h1>
                <img alt='#' src={require(`../icons/${this.props.icon}.png`)}></img>
                    <div className='ForecastDayRow'>
                        <span className='temp'>{this.props.temperature}</span>
                        <span>{this.props.description}</span>
                    </div>
                    </div>
        );
    }
}

export default Forecast1Day;