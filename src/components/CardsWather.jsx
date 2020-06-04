import React from 'react';
import CardWather from './CardWather'

const CardsWather = (props) => {
    const { favorires } = props;
    console.log(props);
    
    return (
        <div className='cards'>
            {favorires.map( (item, index) => <CardWather key={index} data={item}/>)}
        </div>
    );
};

export default CardsWather;