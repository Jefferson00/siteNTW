import React from 'react'
import hlImg1 from '../../assets/hl-1.jpg'
import hlImg2 from '../../assets/hl-2.jpg'
import hlImg3 from '../../assets/hl-3.jpg'
import hlImg4 from '../../assets/hl-4.jpg'


export default function Highlight(){
    return(
      
    <section className="highlight">
    <div>
      <img src={hlImg1}/>
      <p>Empresas Lideres do Mercado de Tecnologia</p>
    </div>
    <div>
      <img src={hlImg2}/>
      <p>Ideias Inovadoras</p>
    </div>
    <div>
      <img src={hlImg3}/>
      <p>Equipe Especializada</p>
    </div>
    <div>
      <img src={hlImg4}/>
      <p>Suporte Técnico</p>
    </div>
    </section>
    );
  }