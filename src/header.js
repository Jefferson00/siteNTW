import React from 'react';
import logoImg from './assets/logo.png'
import slideImg1 from './assets/slide-1.png'
import slideImg2 from './assets/slide-2.jpg'
import slideImg3 from './assets/slide-3.jpg'

function Header(){
    return(
        <header>
            <div className="poly1"></div>
            <div className="poly2"></div>
            <div className="menu">
            <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>Institucional</a>
                    </li>
                    <li>
                        <a href='#'>Atas Governo</a>
                    </li>
                    <li>
                        <a href='#'>Produtos</a>
                    </li>
                    <li>
                        <a href='#'>Parceiros</a>
                    </li>
                    <li>
                        <a href='#'>Contato</a>
                    </li>
                </ul>
            </div>
            <section className="section-slide">
            <div className="slide">
                <div className="img-slide">
                    <img className="selected" src={slideImg1}/>
                    <img  src={slideImg2}/>
                    <img  src={slideImg3}/>
                    
                </div>
            </div>
            <ul className="ul-slider">
                        <li>
                            <button className="dot-button-selected"></button>
                        </li>
                        <li>
                            <button className="dot-button"></button>
                        </li>
                        <li>
                            <button className="dot-button"></button>
                        </li>
                    </ul>
            <div className="logo">
                <img src={logoImg} alt="logo"/>
            </div>
            </section>
        </header>
    )


}



export default Header;

