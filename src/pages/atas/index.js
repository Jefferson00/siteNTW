import React from 'react'
import Footer from '../../footer'
import './styles.css'
import Monitor22p1e from '../../assets/aoc22p1e.png'
import Tiny from '../../assets/tiny.png'
import Scanner from '../../assets/fujtsu.png'
import logoImg from '../../assets/logo.png'



export default function Atas(){

    let itensProdutos = ['monitores', 'computadores','hiper','scanners','redes','wifi']
    

    function closeModal(){
        var modal = document.getElementById("modal")
        modal.style.display = "none";
    }

    function openModal(){
        var modal = document.getElementById("modal")
        modal.style.display = "flex";
    }
    
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

        <div id="main" className="main-top">
            <div>
                <img src={logoImg}/>
            </div>
            <div>
                <h1>
                    ATAS DE REGISTRO DE PREÇOS
                </h1>
            </div>
        </div>

        <div id="item" className="itens">
            <div id="todos" className="item-selected">Todos</div>
            <div id="monitores">Monitores</div>
            <div id="computadores">Computadores</div>
            <div id="hiper">Hiperconvergencia</div>
            <div id="scanners">Scanners</div>
            <div id="redes">Redes</div>
            <div id="wifi">Wi-Fi</div>
        </div>

        <div className="card-item-list">
            <div id={itensProdutos[0]} className="card-item" onClick={()=> openModal()}>
                <div className="card-title">
                    <h1>MONITOR</h1>
                </div>
                <div className="card-img">
                    <img src={Monitor22p1e}/>
                </div>
                <h3>MONITOR AOC 21,5'' 22P1E</h3>
                <div className="card-table-description">
                    <table>
                        <tr>
                            <td>Caracteristica:</td>
                            <td>FullHD, VGA, HDMI,DIsplayPort, Ajuste de Altura, Inclinação e Rotação</td>
                        </tr>
                        <tr>
                            <td>Orgão:</td>
                            <td>CFP-DF</td>
                        </tr>
                        <tr>
                            <td>Quantidade Registrada:</td>
                            <td>76 unidades</td>
                        </tr>
                        <tr>
                            <td>Garantia:</td>
                            <td>60 Meses</td>
                        </tr>
                        <tr>
                            <td>Validade:</td>
                            <td>Janeiro de 2020</td>
                        </tr>
                        <tr>
                            <td>Valor únitario registrado:</td>
                            <td>R$ 600,00</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div id={itensProdutos[3]} className="card-item" onClick={()=> openModal()}>
                <div className="card-title">
                    <h1>SCANNER</h1>
                </div>
                <div className="card-img">
                    <img src={Scanner}/>
                </div>
                <h3>Scanner Fujitsu Fi-7280</h3>
                <div className="card-table-description">
                    <table>
                        <tr>
                            <td>Caracteristica:</td>
                            <td>FullHD, VGA, HDMI,DIsplayPort, Ajuste de Altura, Inclinação e Rotação</td>
                        </tr>
                        <tr>
                            <td>Orgão:</td>
                            <td>CFP-DF</td>
                        </tr>
                        <tr>
                            <td>Quantidade Registrada:</td>
                            <td>76 unidades</td>
                        </tr>
                        <tr>
                            <td>Garantia:</td>
                            <td>60 Meses</td>
                        </tr>
                        <tr>
                            <td>Validade:</td>
                            <td>Janeiro de 2020</td>
                        </tr>
                        <tr>
                            <td>Valor únitario registrado:</td>
                            <td>R$ 600,00</td>
                        </tr>
                    </table>
                </div>
            </div>
            
            <div id={itensProdutos[0]} className="card-item" onClick={()=> openModal()}>
                <div className="card-title">
                    <h1>MONITOR</h1>
                </div>
                <div className="card-img">
                    <img src={Monitor22p1e}/>
                </div>
                <h3>MONITOR AOC 21,5'' 22P1E</h3>
                <div className="card-table-description">
                    <table>
                        <tr>
                            <td>Caracteristica:</td>
                            <td>FullHD, VGA, HDMI,DIsplayPort, Ajuste de Altura, Inclinação e Rotação</td>
                        </tr>
                        <tr>
                            <td>Orgão:</td>
                            <td>CFP-DF</td>
                        </tr>
                        <tr>
                            <td>Quantidade Registrada:</td>
                            <td>76 unidades</td>
                        </tr>
                        <tr>
                            <td>Garantia:</td>
                            <td>60 Meses</td>
                        </tr>
                        <tr>
                            <td>Validade:</td>
                            <td>Janeiro de 2020</td>
                        </tr>
                        <tr>
                            <td>Valor únitario registrado:</td>
                            <td>R$ 600,00</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div id={itensProdutos[0]} className="card-item" onClick={()=> openModal()}>
                <div className="card-title">
                    <h1>MONITOR</h1>
                </div>
                <div className="card-img">
                    <img src={Monitor22p1e}/>
                </div>
                <h3>MONITOR AOC 21,5'' 22P1E</h3>
                <div className="card-table-description">
                    <table>
                        <tr>
                            <td>Caracteristica:</td>
                            <td>FullHD, VGA, HDMI,DIsplayPort, Ajuste de Altura, Inclinação e Rotação</td>
                        </tr>
                        <tr>
                            <td>Orgão:</td>
                            <td>CFP-DF</td>
                        </tr>
                        <tr>
                            <td>Quantidade Registrada:</td>
                            <td>76 unidades</td>
                        </tr>
                        <tr>
                            <td>Garantia:</td>
                            <td>60 Meses</td>
                        </tr>
                        <tr>
                            <td>Validade:</td>
                            <td>Janeiro de 2020</td>
                        </tr>
                        <tr>
                            <td>Valor únitario registrado:</td>
                            <td>R$ 600,00</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div id={itensProdutos[1]} className="card-item" onClick={()=> openModal()}>
                <div className="card-title">
                    <h1>Microcomputador Tiny</h1>
                </div>
                <div className="card-img">
                    <img src={Tiny}/>
                </div>
                <h3>ThinkCentre M720q</h3>
                <div className="card-table-description">
                    <table>
                        <tr>
                            <td>Caracteristica:</td>
                            <td>Intel Core i5-8500T, 8GB de RAM, 1TB HDD, Windows 10 Professional</td>
                        </tr>
                        <tr>
                            <td>Orgão:</td>
                            <td>TSE-DF</td>
                        </tr>
                        <tr>
                            <td>Quantidade Registrada:</td>
                            <td>385 unidades</td>
                        </tr>
                        <tr>
                            <td>Garantia:</td>
                            <td>48 Meses</td>
                        </tr>
                        <tr>
                            <td>Validade:</td>
                            <td>Janeiro de 2020</td>
                        </tr>
                        <tr>
                            <td>Valor únitario registrado:</td>
                            <td>R$ 4.520,20</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

        <div className="download-item">
            <button className="download">DOWNLOAD PDF</button>
        </div>
        <Footer></Footer>

        <div id="modal" className="box-modal">
            <div className="box-modal-content">
                <div><img src={Monitor22p1e}/></div>
                <div>
                    <div className="table-modal">
                        <table>
                            <tr>
                                <td>Caracteristica:</td>
                                <td>FullHD, VGA, HDMI,DIsplayPort, Ajuste de Altura, Inclinação e Rotação
                                    Cabos DisplayPort e HDMI
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </td>
                            </tr>
                            <tr>
                                <td>Orgão:</td>
                                <td>CFP-DF</td>
                            </tr>
                            <tr>
                                <td>Quantidade Registrada:</td>
                                <td>76 unidades</td>
                            </tr>
                            <tr>
                                <td>Garantia:</td>
                                <td>60 Meses</td>
                            </tr>
                            <tr>
                                <td>Validade:</td>
                                <td>Janeiro de 2020</td>
                            </tr>
                            <tr>
                                <td>Valor únitario registrado:</td>
                                <td>R$ 600,00</td>
                            </tr>
                        </table>
                    </div>
                
                </div>
                <div onClick={() =>closeModal()}>
                    X
                </div>
            </div>
        </div>

        </div>
    )
    

}

    