import React from 'react'
import {Facebook, Instagram, LinkedIn, Mail, Room, Phone} from '@material-ui/icons'
import './styles.css'
import logoImg from '../../assets/logo.png'
import MapTest from './map'

export default function Contato(){
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
                            <a href='/Atas'>Atas Governo</a>
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
            <div className="main-top">
                    <div>
                        <img src={logoImg}/>
                    </div>
                    <div>
                        <h1>
                            CONTATO
                        </h1>
                    </div>
                    
                </div>
                <div className="contact-content">
                    <div className="contact-form-container">
                        <div className="contact-form">
                            <form>
                                <div className="input-group">
                                    <div>
                                        <label data-end=" *">Nome</label>
                                        <input type="text"></input>
                                    </div>
                                    <div>
                                        <label data-end=" *">Sobrenome</label>
                                        <input type="text"></input>
                                    </div>
                                </div>    
                                <label data-end=" *">Email</label>
                                <input type="email"></input>
                                <label data-end=" *">Assunto</label>
                                <input type="text"></input>
                                <label data-end=" *">Mensagem</label>
                                <textarea></textarea>
                                <input type="button" value="ENVIAR"></input>
                            </form>

                            <div className="informations">
                                <p><Room fontSize="Large"/> SCN Quadra 01 Bloco F, Ed. América Office Tower, Sala 501 Brasília-DF CEP 70711-905</p>
                                <p><Phone fontSize="Large"/> 61 3202-9393</p>
                                <p><Mail fontSize="Large"/> northware@northware.com.br</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-contact">
                        <p>VAMOS CONVERSAR!</p>
                        <p>Temos uma equipe especializada de vendedores prontos para te atender.</p>
                    </div>
                 </div>
                <div className="footer-2">
                    
                    <div className="maps">
                        <MapTest></MapTest>
                    </div>
                    
                    <div className="social">
                        <h1>SIGA-NOS</h1>
                        <div>
                            <h1>
                                <a href="#">
                                    <Facebook/>
                                </a>
                            </h1>
                            <h1>
                                <a href="#">
                                    <Instagram/>
                                </a>
                            </h1>
                            <h1>
                                <a href="#">
                                    <LinkedIn/>
                                </a>
                            </h1>
                            <h1>
                                <a href="#">
                                    <Mail/>
                                </a>
                            </h1>
                        </div>
                    </div>

                    

                </div>
          

        </div>
    )
}