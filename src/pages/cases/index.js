import React, {useEffect} from 'react'
import './styles.css'
import Footer from '../../footer'
import logoImg from '../../assets/logo.png'
import StjImg from '../../assets/stj-case.jpg'
import tjrsImg from '../../assets/tjrs-cases.jpg'
import censipamImg from '../../assets/censipam.jpg'
import hl1Img from '../../assets/hl-1.jpg'
import hl2Img from '../../assets/hl-2.jpg'
import hl3Img from '../../assets/hl-3.jpg'


export default function Cases(){

    useEffect(() => {
        window.scrollTo(0, 0)
    });

    function closeModal(){
        var modal = document.getElementById("modal")
        modal.style.display = "none";
    }

    function openModal(){
        var modal = document.getElementById("modal")
        modal.style.display = "flex";
    }

    return(<div>
            <header className="header2">
                <div className="menu">
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/#inst'>Institucional</a>
                        </li>
                        <li>
                            <a href='/produtos'>Produtos</a>
                        </li>
                        <li>
                            <a href='/parceiros'>Parceiros</a>
                        </li>
                        <li>
                            <a href='/contato'>Contato</a>
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
                        CASES DE SUCESSO
                    </h1>
                </div>
            </div>
            <div className="text-cases">
                <p>Conheça alguns cases de sucesso, de vendas ao governo, que contribuíram para o crescimento da Northware em fornecimento no país.</p>
            </div>
            <div className="cases-list">
                <div onClick={()=> openModal()} className="cases-card">
                    
                        <div className="cases-card-title"><p>STJ</p></div>
                        <div className="cases-card-content">
                             <img src={StjImg}/>
                        </div>
                        <div className="cases-card-span"><p>A Northware entregou uma solução completa de scanners que atendeu todas as necessidades em digitalização do STJ</p></div>
                    
                </div>
                <div onClick={()=> openModal()} className="cases-card">
                    
                        <div className="cases-card-title"><p>STJ</p></div>
                        <div className="cases-card-content">
                             <img src={hl3Img}/>
                        </div>
                        <div className="cases-card-span"><p>A Northware entregou uma solução completa de scanners que atendeu todas as necessidades em digitalização do STJ</p></div>
                    
                </div>
                <div onClick={()=> openModal()} className="cases-card">
                    
                        <div className="cases-card-title"><p>STJ</p></div>
                        <div className="cases-card-content">
                             <img src={tjrsImg}/>
                        </div>
                        <div className="cases-card-span"><p>A Northware entregou uma solução completa de scanners que atendeu todas as necessidades em digitalização do STJ</p></div>
                    
                </div>
                <div onClick={()=> openModal()} className="cases-card">
                    
                        <div className="cases-card-title"><p>STJ</p></div>
                        <div className="cases-card-content">
                             <img src={hl2Img}/>
                        </div>
                        <div className="cases-card-span"><p>A Northware entregou uma solução completa de scanners que atendeu todas as necessidades em digitalização do STJ</p></div>
                    
                </div>
               
                
            </div>

        <Footer></Footer>
        <div id="modal" className="box-modal">
            <div className="box-modal-content">
                <div><img src={StjImg}/></div>
                <div>
                    <p>
                    A NorthWare participou de alguns dos projetos de maior destaque do mercado brasileiro de TI. Seja com clientes do setor público ou empresas privadas, as soluções de comunicação desenvolvidas são reconhecidas como pioneiras e com ganhos marcantes. No portfólio de clientes da NorthWare estão presentes empresas e órgão da administração pública das esferas dos poderes judiciário, executivo e legislativo. Conheça um pouco mais de alguns de nossos casos de sucesso e entenda como a Northware poderá auxiliar sua empresa a conquistar novos mercados com a adoção eficaz e inteligente da Tecnologia da Informação.
                    </p>
                </div>
                <div onClick={() =>closeModal()}>
                    X
                </div>
            </div>
        </div>
    </div>)

    
}