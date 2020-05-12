import React from 'react'
import {FiFacebook, FiInstagram, FiLinkedin, FiMail} from 'react-icons/fi';

function Footer(){
    return(
        <footer>
            <div className="social">
                <h1>SIGA-NOS</h1>
                <div>
                    <h1><FiFacebook/></h1>
                    <h1><FiInstagram/></h1>
                    <h1><FiLinkedin/></h1>
                    <h1><FiMail/></h1>
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
        </footer>
    )
}

export default Footer;