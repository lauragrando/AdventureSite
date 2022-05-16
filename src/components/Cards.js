import React from 'react';
import CardItem from './CardItem';



function Cards() {
    return (
        <div className='cards'>
            <h1>Destinos mais procurados</h1>
            <div className='cards__container'>
                <div className='cards__wraper'>
                    <ul className='cards__items'>
                        <CardItem
                            // Texto para o card n°1
                            label='Adventure'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;