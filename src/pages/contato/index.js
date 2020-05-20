import React from 'react'
import Footer from '../../footer'
import './styles.css'
import logoImg from '../../assets/logo.png'


export default function Contato(){
    return(
        <div>
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
                    </ul>
                </div>
            </header>
            <Footer></Footer>
        </div>
    )
}