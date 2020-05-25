import React from 'react'
import Footer from '../../footer'
import './styles.css'
import logoImg from '../../assets/logo.png'
import FujitsuImg from '../../assets/fujitsu-logo.png'
import LenovoImg from '../../assets/Lenovo_Global_Corporate_Logo.png'
import AOCImg from '../../assets/aoc-logo.png'
import NutanixImg from '../../assets/Nutanix_Logo.png'
import NetImg from '../../assets/NetScout_logo.png'
import PolycomImg from '../../assets/polycom-logo.png'
import HuaweiImg from '../../assets/huawei-logo.png'
import PhilipsImg from '../../assets/Philips-logo.png'



export default function Parceiros() {
    return (
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
                            <a href='/produtos'>Produtos</a>
                        </li>
                        <li>
                            <a href='/contato'>Contato</a>
                        </li>
                    </ul>
                </div>

                <div className="main-top">
                    <div>
                        <img src={logoImg} />
                    </div>
                    <div>
                        <h1>
                            PARCEIROS
                        </h1>
                    </div>
                </div>

                <div className="partner-text">
                    <h1>A NorthWare possui parcerias com os melhores fornecedores de Tecnologia da Informação do mundo. </h1>
                    <h3>Com o intuito de possuir identidade e conhecimento profundo nas soluções comercializadas, trabalha de forma dedicada para fabricantes de segmentos distintos. O resultado foi reconhecido através de certificações e premiações</h3>
                </div>

                <div className="partner-list">
                    <div>
                        <a href="https://www.fujitsu-general.com/br/">
                            <img src={FujitsuImg}/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.fujitsu-general.com/br/">
                            <img src={LenovoImg}/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.fujitsu-general.com/br/">
                            <img src={AOCImg}/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.fujitsu-general.com/br/">
                            <img src={NutanixImg}/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.fujitsu-general.com/br/">
                            <img src={NetImg}/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.fujitsu-general.com/br/">
                            <img src={PolycomImg}/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.fujitsu-general.com/br/">
                            <img src={HuaweiImg}/>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.fujitsu-general.com/br/">
                            <img src={PhilipsImg}/>
                        </a>
                    </div>
                </div>
            </header>
            <Footer></Footer>
        </div>
    )
}