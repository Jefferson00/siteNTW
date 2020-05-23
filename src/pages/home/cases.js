import React from 'react'
import {Link} from 'react-router-dom'


export default function Cases(){
    return(
        <section  className="cases">
          <div>
            <h1>Segurança</h1>
            <p>
            A NorthWare participou de alguns dos projetos de maior destaque do mercado brasileiro de TI. Seja com clientes do setor público ou empresas privadas.
            </p>
            <div className="div-btn-01">
                <Link to="/cases" className="btn-01">SAIBA MAIS</Link>
            </div>
          </div>
          <div>
            <h1>Hiperconvergencia</h1>
            <p>
            A NorthWare participou de alguns dos projetos de maior destaque do mercado brasileiro de TI. Projetos de Hiperconvergencias deram o que falar bicho
            </p>
            <div className="div-btn-01">
                  <Link to="/cases" className="btn-01">SAIBA MAIS</Link>
            </div>
          </div>
          <div>
            <h1>Digitalização</h1>
            <p>
            A NorthWare participou de alguns dos projetos de maior destaque do mercado brasileiro de TI. Seja com clientes do setor público ou empresas privadas.
            </p>
            <div className="div-btn-01">
                <Link to="/cases" className="btn-01">SAIBA MAIS</Link>
            </div>
          </div>
        </section>
    );
  }