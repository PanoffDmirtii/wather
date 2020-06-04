import React from 'react';
import { getCelsius } from '../utils'

const CardWather = (props) => {
    const {data} = props;
    return (
            <div className="card">
                <div className="card__city">
                    {data.name}
                </div>
                <div className="card__info">
                    <span>{getCelsius(data.main.temp_min)} - {getCelsius(data.main.temp_max)}°C</span>
                </div>
            </div>
    );
};

export default CardWather;