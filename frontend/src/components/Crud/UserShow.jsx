import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'
import Api from '../../Service/Api'


 
const headerProps = {
    icon: 'users',
    title: 'Consulta Dados Contatos',
}

const baseUrl = Api

const initialState = {
    user: {name: '', email: '' , telefone: '', rg: '', cpf: '', sobrenome: '', cidade: '', estado: '', rua: '', numero: '', complemento: '', cep: '', n_cartao: 'xxxxxxxx', nome_cartao: ''},
    list: []
}

export default class UserShow extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }


    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                         <th>RG</th>
                        <th>sobrenome</th>
                        <th>cidade</th>
                        <th>Estado</th>
                        <th>Numero</th>
                        <th>Cep</th>
                        <th>N Cartão</th>
                        <th>Nome Cartão</th>

                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.telefone}</td>
                    <td>{user.rg}</td>
                    <td>{user.sobrenome}</td>
                    <td>{user.cidade}</td>
                    <td>{user.estado}</td>
                    <td>{user.numero}</td>
                    <td>{user.cep}</td>
                    <td>{user.n_cartao}</td>
                    <td>{user.nome_cartao}</td>
                                      
                </tr>
            )
        })
    }
    
    render() {
        return (
            <Main {...headerProps}>
                {this.renderTable()}
            </Main>
        )
    }
}