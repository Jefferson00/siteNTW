import React from 'react'
import Footer from '../../footer'
import './styles.css'
import logoImg from '../../assets/logo.png'
import pcsdImg from '../../assets/pcsd.png'
import networkingImg from '../../assets/network.png'
import scannerImg from '../../assets/scanners.png'

export default function Produtos(){
    return(
        <div>
            <header className="header2">
                <div id="menu" className="menu">
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/'>Institucional</a>
                        </li>
                        <li>
                            <a href='/atas'>Atas</a>
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
                    PRODUTOS E SOLUÇÕES
                </h1>
            </div>
            </div>

            <div className="main-content-produtos">
                <div className="item-produtos">
                    <div className="produtos-img">
                         <img src={pcsdImg}/>
                    </div>
                    <div className="produtos-description">
                        <div>
                            <h1>Desktops, Workstations e Notebooks</h1>
                            <p>Soluções para pequenas, médias e grandes empresas</p>
                        </div>
                        <div>
                            <button className="download">SAIBA MAIS</button>
                        </div>
                    </div>
                </div>

                <div className="item-produtos">
                    <div className="produtos-img">
                        <img src={networkingImg}/>
                    </div>
                    <div className="produtos-description">
                        <div>
                            <h1>Soluções Datacenter e Hiperconvergencia</h1>
                            <p>Soluções para pequenas, médias e grandes empresas</p>
                        </div>
                        <div>
                            <button className="download">SAIBA MAIS</button>
                        </div>
                    </div>
                </div>

                <div className="item-produtos">
                    <div className="produtos-img">
                        <img src={scannerImg}/>
                    </div>
                    <div className="produtos-description">
                        <div>
                            <h1>Soluções em Digitalização</h1>
                            <p>Soluções para pequenas, médias e grandes empresas</p>
                        </div>
                        <div>
                            <button className="download">SAIBA MAIS</button>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}