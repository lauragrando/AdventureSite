import React from 'react';
import { Link } from 'react-router-dom'
import './Cards.css'
import ImgTest from '../images/fernandoNoronha.jpg'
import ImgTest2 from '../images/Gramado.jpg'
import ImgTest3 from '../images/Waterfall.jpg'
import ImgTest4 from '../images/Volcano.jpg'
import ImgTest5 from '../images/BelaPaisagem.jpg'


function CardItem(props) {
    return (
        <div className='cards'>
            <li className='cards__item'>
                <Link to={props.path} className='cards__item__link'>
                    <figure className='cards__item__pic-wrap' data-category='Natureza'>
                       <img src={ImgTest3} alt='Travel Image' classname='cards__item__img'/>
                       <div className='cards__adventure'></div>
                    </figure>   
                    <div className='cards__item__info'>
                    <h5 className='cards__item__text'>Cachoeira Angel</h5>
                    </div>
                </Link>
            </li>
            <li className='cards__item'>
                <Link to={props.path} className='cards__item__link'>
                    <figure className='cards__item__pic-wrap' data-category='Paradisíaco'>
                       <img className='cards__item__img' src={ImgTest} alt='Travel Image'/>
                       <div className='cards__adventure'></div>
                    </figure >   
                    <div className='cards__item__info'>
                    <h5 className='cards__item__text'>Fernando de Noronha</h5>
                    </div>
                </Link>
            </li>
            <li className='cards__item'>
                <Link to={props.path} className='cards__item__link'>
                    <figure className='cards__item__pic-wrap' data-category='Atração'>
                       <img className='cards__item__img' src={ImgTest2} alt='Travel Image'/>
                       <div className='cards__adventure'></div>
                    </figure >   
                    <div className='cards__item__info'>
                    <h5 className='cards__item__text'>Mini Mundo</h5>
                    </div>
                </Link>
            </li>
            <li className='cards__item__1'>
                <Link to={props.path} className='cards__item__link'>
                    <figure className='cards__item__pic-wrap' data-category='Paradisíaco'>
                       <img className='cards__item__img' src={ImgTest4} alt='Travel Image'/>
                       <div className='cards__adventure'></div>
                    </figure >   
                    <div className='cards__item__info'>
                    <h5 className='cards__item__text'>Krakatoa</h5>
                    </div>
                </Link>
            </li>
            <li className='cards__item__1'>
                <Link to={props.path} className='cards__item__link'>
                    <figure className='cards__item__pic-wrap' data-category='Cidade'>
                       <img className='cards__item__img' src={ImgTest5} alt='Travel Image'/>
                       <div className='cards__adventure'></div>
                    </figure >   
                    <div className='cards__item__info'>
                    <h5 className='cards__item__text'>Heidelberg</h5>
                    </div>
                </Link>
            </li>
            
        </div>
    );

}

export default CardItem;