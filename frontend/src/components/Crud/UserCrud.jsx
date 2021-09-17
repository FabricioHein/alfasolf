import React, { Component } from 'react'
import axios from 'axios'
import Api from '../../Service/Api'
import Main from '../template/Main'
import '../template/Logo.css'


const headerProps = {
    icon: 'users',
    title: 'Cadastro',
    subtitle: 'Novo Cadastro Contato'
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

export default class UserCrud extends Component {

    state = { ...initialState }    

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl


        this.validation(user) ?


            axios[method](url, user)
                .then(resp => {
                    const list = this.getUpdatedList(resp.data)
                    this.setState({ user: initialState.user, list })
                })

            :

            alert('Há campos em vazios, favor preencher todos os campos')
    }
    validation(user) {
        const validation =
            user.email ? true : false

        console.log(validation)

        return validation

    }


    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if (add) list.unshift(user)
        return list
    }

    updateField(e) {
        const user = { ...this.state.user }
        user[e.target.name] = e.target.value
        this.setState({ user })


    }


    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                        </div>

                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o e-mail..." />
                        </div>

                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Contato</label>
                            <input type="text" className="form-control"
                                name="contact"
                                value={this.state.user.contact}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o contato..." />
                        </div>
                        <div className="form-group">
                            <label>Image</label>

                            <input type="file" className="form-control"
                                name="image"
                                value={this.state.user.url}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o contato..." />
                        </div>



                    </div>



                </div>



                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>

                    </div>
                </div>
            </div>
        )
    }

    load(user) {
        this.setState({ user })
    }
    show(user) {
        this.setState({ user })

       


    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
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
                        <th>Image</th>
                        <th>Ações</th>

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
                    <td>
                        <img className="img" src={user.urlImage} alt='userimage'>
                        </img>

                    </td>


                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}
                        >
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                        <button className="btn btn-info ml-2"
                            onClick={() => this.show(user)}>
                            <i className="fa fa-eye"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}