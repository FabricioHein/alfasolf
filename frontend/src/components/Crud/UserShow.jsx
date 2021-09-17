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
    user: {
        id: '',
        name: '',
        email: '',
        contact: '',
        url: ''
    },
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
                        <th>Contato</th>
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
                    <td>{user.contact}</td>
                                    
                                      
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