import React, {useState, useEffect} from 'react'
import './styles.css'
import logoW from '../../assets/Logo-w.png'
import {Edit, Delete} from '@material-ui/icons'
import api from '../../services/api';
import {useHistory} from 'react-router-dom'



export default function Admin(){

    const history = useHistory();

    /*variaveis de estado */
    const [users,  setUsers] = useState([]);
    const [id, setId] = useState('');
    const [name, setNome] = useState('');
    const [password, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');

    const access = 2;
    const userName = localStorage.getItem('name');

    /* Verifica se existe algum usuario logado, caso não existe redireciona para a pagina de login */
    if(!localStorage.Userid){
        history.push('/admin')
    }

    /*carrega todos os usuarios menos o admin */
    useEffect(()=>{
        api.get('users').then(response =>{
            setUsers(response.data.filter(user => user.access != 1))
        });
    },[])

    /*função que recarrega todos os usuarios */
    function reload(){
        api.get('users').then(response =>{
            setUsers(response.data.filter(user => user.access != 1))
        });
    }

    /*função de cadastrar novo usuario */
    async function cadastrarUser(e){
        e.preventDefault()

        if(password != confSenha){
            alert('A senha não corresponde!')
        }else{
            try{
                const data = { name, password, access}
                const response = await api.post('users', data)
                alert('Cadastro realizado!')
               
            }catch(err){
                alert('Cadastro não realizado')
               
            }
        }
        reload()
        setId('')
        setNome('')
        setSenha('')
        setConfSenha('')
    }

/*função de deletar um usuario */
    async function deleteUser(id){
        try{
            await api.delete(`users/${id}`,{
                headers:{
                    Authorization: 9,
                }
            });
        }catch(err){
            alert('nao foi possivel deletar')
        }

        setUsers(users.filter(user => user.id !== id))
    }

    /*função que carrega os dados do usuario no formulario para alteração */
    function clickEdit(id){
        const btnEdit = document.getElementById("btn-edit")
        btnEdit.style.display = "block"
        const userEdit = users.filter(user =>user.id == id)
        setNome(userEdit[0].name)
        setId(id)
    }

    /*função de atualizar usuario */
    async function editUser(id){
        
        const data = {name}

        if(password!='' && password == confSenha){
            const data2 = {password}
            try{
                await api.post(`userpass/${id}`, data2)
                alert('Senha atualizada com sucesso!')
            }catch(err){
                alert('nao foi possivel atualizar')
            } 
        }

            try{
                await api.post(`users/${id}`, data)
                alert('Atualizado!')
            }catch(err){
                alert('nao foi possivel atualizar')
            }
       

        reload()
        setId('')
        setNome('')
        setSenha('')
        setConfSenha('')
    }

    /* menu de seleção dos itens */
    const itensAdmin = document.querySelectorAll('.itens-admin >div')
    const formsAdmin = document.querySelectorAll('.contact-form.grid form')
    console.log(formsAdmin)
    for(var i=0; i< itensAdmin.length; i++){
        (function(i){
          itensAdmin[i].addEventListener('click', function(){
           
              for(var x=0; x< itensAdmin.length; x++){
                  if(x!=i){
                    itensAdmin[x].classList.remove('item-selected')
                  }
              }
              itensAdmin[i].classList.add('item-selected')
              for(var t=0;t< formsAdmin.length; t++){
                  if(formsAdmin[t].id === itensAdmin[i].id){
                      formsAdmin[t].classList.add('active')
                  }
                  else{
                      formsAdmin[t].classList.remove('active')
                  }
              }
          })
        })(i);
      }

/*função de logout */
      function logout(){
          localStorage.clear();
          history.push('/admin')
      }

return(
    <div>
            <header className="header-admin-index">
                <div>
                    <div>
                        <img src={logoW}/>
                    </div>
                    <div>
                        <h3>PAINEL ADMINISTRATIVO</h3>
                    </div>
                </div>
                <div>
                    <div>
                        <p>{userName}</p>
                    </div>
                    <div onClick={logout}>
                        <p>Logout</p>
                    </div>
                </div>
            </header>

            <div id="item-admins" className="itens-admin">
                <div id="atas" className="item-selected">Atas</div>
                <div id="produtos">Produtos</div>
                <div id="cases">Cases</div>
                <div id="parceiros">Parceiros</div>
                <div id="usuarios">Usuários</div>
            </div>

            <div className="main-content-index">
                <div className="contact-form grid">
                    <form id="atas" className="active">
                        <label data-end=" *">Produto</label>
                        <input name="color" id="color" list="colors"></input>
                            <div className="input-group">
                                <div>
                                    <label data-end=" *">Orgão</label>
                                    <input type="text"></input>
                                </div>
                                <div>
                                    <label data-end=" *">Quantidade</label>
                                    <input type="text"></input>
                                </div>
                            </div>
                            <div className="input-group">
                                <div>
                                    <label data-end=" *">Garantia</label>
                                    <input type="text"></input>
                                </div>
                                <div>
                                    <label data-end=" *">Validade</label>
                                    <input type="text"></input>
                                </div>
                                <div>
                                    <label data-end=" *">Valor</label>
                                    <input type="text"></input>
                                </div>
                            </div>
                            <input type="button" value="CADASTRAR"></input>
                    </form>
                    <datalist id="colors"> <option>Red</option> <option>Yellow</option> <option>Blue</option> <option>Green</option> <option>Orange</option> <option>Purple</option> <option>Black</option> <option>White</option> <option>Gray</option> </datalist>

                    <form id="produtos">
                        <label data-end=" *">Categoria</label>
                        <input type="text"></input>
                        <label data-end=" *">Modelo</label>
                        <input type="text"></input>
                        <label data-end=" *">Fabricante</label>
                        <input type="text"></input>
                        <label data-end=" *">Caracteristica</label>
                            <textarea></textarea>
                            <div className="input-group">
                                <div>
                                    <label data-end=" *">É EOL?</label>
                                    <input type="text"></input>
                                </div>
                                <div>
                                    <label data-end=" *">Imagem</label>
                                    <input type="button" value="PROCURAR"></input>
                                </div>
                            </div>
                    
                            <input type="button" value="CADASTRAR"></input>
                    </form>

                    <form id="cases">
                        <label data-end=" *">Categoria</label>
                        <input type="text"></input>
                        <label data-end=" *">Órgão</label>
                        <input type="text"></input>
                        <label data-end=" *">Descrição</label>
                        <textarea></textarea>
                        <label data-end=" *">Imagem</label>
                        <input type="button" value="PROCURAR"></input>
                        <input type="button" value="CADASTRAR"></input>
                    </form>

                    <form id="parceiros">
                        <label data-end=" *">Nome</label>
                        <input type="text"></input>
                        <label data-end=" *">Site</label>
                        <input type="text"></input>
                            <div className="input-group">
                                <div>
                                    <label data-end=" *">Parceria ativa?</label>
                                    <input type="text"></input>
                                </div>
                                <div>
                                    <label data-end=" *">Imagem</label>
                                    <input type="button" value="PROCURAR"></input>
                                </div>
                            </div>
                    
                            <input type="button" value="CADASTRAR"></input>
                    </form>

                    <form id="usuarios" onSubmit={cadastrarUser}>
                        <label data-end=" *">Nome</label>
                        <input type="text" value={name} onChange={e =>setNome(e.target.value)}/>
                        <label data-end=" *">Senha</label>
                        <input type="password" value={password} onChange={e =>setSenha(e.target.value)} />
                        <label data-end=" *">Confirmar Senha</label>
                        <input type="password" value={confSenha} onChange={e =>setConfSenha(e.target.value)}/>
                       
                        <input className="btn-cad" type="submit" value="CADASTRAR"></input>
                        <input className="btn-edit" type="button" value="ATUALIZAR" style={{display:"none"}} id="btn-edit" onClick={() =>{editUser(id)}}></input>
                    </form>

                </div>
                <div className="content-list">
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>
                                <div>
                                    Usuário: {user.name}; 
                                </div>
                                <div>
                                    <button className="btn-edit" onClick={()=> {clickEdit(user.id)}}><Edit/></button>
                                    <button className="btn-delete" onClick={()=> {deleteUser(user.id)}}><Delete/></button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>   
    </div>
    )
}