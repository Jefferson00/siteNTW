import React from 'react';
import logoImg from './assets/logo.png'
import slideImg1 from './assets/slide-1.png'
import slideImg2 from './assets/slide-2.jpg'
import slideImg3 from './assets/slide-3.jpg'
import logoLenovo from './assets/Lenovo_Global_Corporate_Logo.png'
import {NavigateBefore, NavigateNext} from '@material-ui/icons'

export default function Header(){
    return (
        <header>
            <div className="poly1"></div>
            <div className="poly2"></div>
            
            <div id="menu" className="menu">
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='#inst'>Institucional</a>
                    </li>
                    <li>
                        <a href='/atas'>Atas Governo</a>
                    </li>
                    <li>
                        <a href='/produtos'>Produtos</a>
                    </li>
                    <li>
                        <a href='/parceiros'>Parceiros</a>
                    </li>
                    <li>
                        <a href='/contato'>Contato</a>
                    </li>
                </ul>
            </div>
            <div class="container">
                <div class="carousel">
                    <div class="slider">
                        <section><img  src={slideImg1}/>
                            <div> 
                                <h1>AQUI VOCÊ ENCONTRA AS MELHORES OFERTAS!</h1>
                                <img src={logoLenovo}/>
                                <button className="btn-slide">
                                    CONFIRA
                                 </button>
                            </div>
                        </section>
                        <section><img  src={slideImg2}/></section>
                        <section><img  src={slideImg3}/></section>
                    </div>
                    <div class="controls">
                        <span class="arrow prev"><NavigateBefore fontSize="large"></NavigateBefore></span>
                        <span class="arrow next"><NavigateNext fontSize="large"></NavigateNext></span>
                    </div>
                </div>
            </div>
           

            <div className="logo">
                <img src={logoImg} alt="logo"/>
            </div>

        </header>
    );
}