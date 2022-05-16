import React from 'react';
import '../App.css'
import { Button } from './Button';
import './HeroSection.css';
//Video inicial
import Waterfall from './video/Waterfall.mp4'




function HeroSection () {
    return ( 
        <div className='hero-container'>
         {/* Video de apresentação da pagina */}
         <video autoPlay loop muted>
             <source src={Waterfall} type='video/mp4' />
         </video>
        <h1>ADVENTURE AWAITS</h1>
        <p>O que você está esperando?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline'
            buttonSize='btn--large'>Vamos Começar
                </Button>
            
                <Button className='btns' buttonStyle='btn--primary'
            buttonSize='btn--large'>Assista o trailer<i className='far fa-play-circle'/>
                </Button>
            </div> 
        </div>
     );
}

export default HeroSection;