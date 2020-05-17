import React from 'react'
import pcImg from '../../assets/pc.webp'
import scannerImg from '../../assets/scanner.png'
import switchImg from '../../assets/switch.webp'
import serverImg from '../../assets/server.png'
import './styles.css'

export default function Presentation(){
    return(
      <section className="presentation">

      <img id="serverImg" src={serverImg}/>
      <img id="pcImg" src={pcImg}/>
      <img id="scannerImg" src={scannerImg}/>
      <img id="switchImg" src={switchImg}/>
        <div className="up-presentation">
          <div>
              <h1>
                  COM MAIS DE 20 ANOS <br/>DE EXPERIENCIA <br/>EM TECNOLOGIA
              </h1>
          </div>
          <div>
              
          </div>
        </div>
        <div className="down">
          <div> 
            <h1>
            A NORTHWARE OFERECE
            A SEUS CLIENTES
            UM PORTFÓLIO DE 
            SOLUÇÕES TECNOLÓGICAS
            COM GRANDE VALOR AGREGADO
            </h1>
          </div>
          <div></div>
        </div>
      </section>
    );
}