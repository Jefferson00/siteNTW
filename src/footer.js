import React from 'react'
import {Facebook, Instagram, LinkedIn, Mail, KeyboardArrowUp} from '@material-ui/icons'

function Footer(){
    return(
        <footer>
            <div className="inform">
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
                <div className="address">
                    <div>
                        <h1>TELEFONE</h1><h2>61 3202-9393</h2>
                    </div>
                    <div>
                        <h1>E-MAIL</h1><h2>northware@northware.com.br</h2> 
                    </div>
                    <div> 
                        <h1>ENDEREÇO</h1><h2>SCN Quadra 01 Bloco F, Ed. América Office Tower, Sala 501</h2>
                    </div>  
                </div>
            </div>
            <div className="top">
                <a href="#"><KeyboardArrowUp></KeyboardArrowUp></a>
            </div> 
            <div className="copy">
                2020 Northware
            </div>
        </footer>
    )
}

export default Footer;