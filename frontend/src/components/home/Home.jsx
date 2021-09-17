import React from 'react'
import Main from '../template/Main'
import Menu from '../home/Menu'

export default props =>
    <Main icon="home" title="Início"
        subtitle="Sistema.">
        <div className='display-4'>Bem Vindo!</div>
        <hr />

        <p className="mb-0">Sistema de Gestão de Contatos</p>

        <div >
            <Menu/>

</div>
 
        
    </Main>