import React from 'react'
import pcImg from '../../assets/pc.webp'
import scannerImg from '../../assets/scanner.png'
import switchImg from '../../assets/switch.webp'
import serverImg from '../../assets/server.png'
import './styles.css'

export default function Presentation(){
    return(
      <section className="presentation">

      <img id="serverImg" src={serverImg} data-anime="show-up"/>
      <img id="pcImg" src={pcImg} data-anime="show-up"/>
      <img id="scannerImg" src={scannerImg} data-anime="show-up"/>
      <img id="switchImg" src={switchImg} data-anime="show-up"/>
        <div className="up-presentation" data-anime="left">
          <div>
              <h1>
                  COM MAIS DE 20 ANOS <br/>DE EXPERIENCIA <br/>EM TECNOLOGIA
              </h1>
          </div>
          <div>
              
          </div>
        </div>
        <div className="down" data-anime="rigth">
        <div></div>
          <div> 
            <h1>
            A NORTHWARE OFERECE
            A SEUS CLIENTES
            UM PORTFÓLIO DE 
            SOLUÇÕES TECNOLÓGICAS
            COM GRANDE VALOR AGREGADO
            </h1>
          </div>
        </div>
      </section>
    );
}