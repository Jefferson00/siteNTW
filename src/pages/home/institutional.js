import React from 'react'
import hlImg1 from '../../assets/hl-1.jpg'
import inst1 from '../../assets/inst-1.jpg'


export default function Institutional(){

    const text1 = `Compromisso, parceria e seriedade são as principais objetivos da NorthWare ao oferecer as melhores Soluções em Tecnologia e Informação (TI) para os seus clientes. A NorthWare, há mais de 20 anos, tem a honra de possuir soluções de fabricantes líderes de mercado em seu portfólio. Além disso, conta com equipe de profissionais capacitados com as mais importantes e reconhecidas certificações do mercado.  O resultado é a excelência nos projetos de infra-estrutura, digitalização, segurança, gerenciamento, produtividade e comunicação nas redes corporativas. `
    const text2 = "A NorthWare está presente desde 1992, baseada nos conceitos de diferenciação pelo seu compromisso com o cliente. Agrega em seu portfólio produtos de parceiros diversos como Air Tight, Fujitsu, LANDesk, Lenovo, R-Post e Oracle, líderes mundiais do setor. Tornou-se referência no fornecimento de soluções em Tecnologia da Informação (TI) em razão do alto nível dos seus profissionais e do elaborado portfólio em produtos e serviços. Sediada em Brasília, conta com agentes em todo o Brasil, o que a capacita a atuar em projetos de âmbito nacional.  Com profundo conhecimento e experiência no setor governamental, a empresa oferece aos clientes soluções integradas em hardware e software , desde a implementação, o treinamento até o suporte. "
    
    return(
     <section className="institutional">
         <div>
           <h1>SOBRE A NORTHWARE</h1>
           <p>
             {text1}
           </p>
         </div>
         <div>
           <img src={inst1} />
         </div>
         <div>
           <img src={hlImg1} />
         </div>
         <div>
           <h1>DIFERENCIAL</h1>
           <p>
             {text2}
           </p>
         </div>
       </section>
    ); 
 }