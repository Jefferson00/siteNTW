import React from 'react'
import './styles.css'
import Footer from '../../footer'
import logoImg from '../../assets/logo.png'
import StjImg from '../../assets/stj-case.jpg'
import tjrsImg from '../../assets/tjrs-cases.jpg'
import censipamImg from '../../assets/censipam.jpg'
import hl1Img from '../../assets/hl-1.jpg'
import hl2Img from '../../assets/hl-2.jpg'
import hl3Img from '../../assets/hl-3.jpg'

export default function Cases(){
    return(<div>
            <header className="header2">
                <div className="menu">
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/'>Institucional</a>
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
            </header>
            <div className="main-top">
                <div>
                    <img src={logoImg}/>
                </div>
                <div>
                    <h1>
                        CASES DE SUCESSO
                    </h1>
                </div>
            </div>
            <div className="text-cases">
                <h1>Conheça alguns cases de sucesso, de vendas ao governo, que contribuíram para o crescimento da Northware em fornecimento no país.</h1>
            </div>
            <div className="cases-list">
                <div className="cases-card">
                    <div class="cases-card-grid">
                        <div className="cases-card-title"><p>STJ</p></div>
                        <div>
                             <img src={hl1Img}/>
                             <p>LEGENDA</p>
                        </div>
                    </div>
                </div>
                <div className="cases-card">
                    <div class="cases-card-grid">
                        <div className="cases-card-title"><p>STJ</p></div>
                        <div>
                             <img src={hl1Img}/>
                             <p>LEGENDA</p>
                        </div>
                    </div>
                </div>
                <div className="cases-card">
                    <div class="cases-card-grid">
                        <div className="cases-card-title"><p>STJ</p></div>
                        <div>
                             <img src={hl1Img}/>
                             <p>LEGENDA</p>
                        </div>
                    </div>
                </div>
                <div className="cases-card">
                    <div class="cases-card-grid">
                        <div className="cases-card-title"><p>STJ</p></div>
                        <div>
                             <img src={hl1Img}/>
                             <p>LEGENDA</p>
                        </div>
                    </div>
                </div>
                <div className="cases-card">
                    <div class="cases-card-grid">
                        <div className="cases-card-title"><p>STJ</p></div>
                        <div>
                             <img src={hl1Img}/>
                             <p>LEGENDA</p>
                        </div>
                    </div>
                </div>
                <div className="cases-card">
                    <div class="cases-card-grid">
                        <div className="cases-card-title"><p>STJ</p></div>
                        <div>
                             <img src={hl1Img}/>
                             <p>LEGENDA</p>
                        </div>
                    </div>
                </div>
                
            </div>

        <Footer></Footer>
    </div>)
}