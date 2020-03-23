import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import Articles from '../../../inserts/Articles'
import Posts from '../../../inserts/Posts'
import Portfolios from '../../../inserts/Portfolios'
import Repositories from '../../../inserts/Repositories'
import Contacts from '../../../inserts/Contacts'

export default function AccessDashboardSuccefull() {
    return (
        
    <div >
        <center>
            <Modal
                className="buttons-dashboard"
                trigger={<Button className="buttons-dashboard">Artigos</Button>}
                header='Realizar novo artigo'
                content={<Articles />}
            />
            <Modal
                className="buttons-dashboard"
                trigger={<Button className="buttons-dashboard">Posts</Button>}
                header='Realizar nova postagem'
                content={<Posts />}
            />
            <Modal
                className="buttons-dashboard"
                trigger={<Button className="buttons-dashboard">Portfolios</Button>}
                header="Editar portfólio"
                content={<Portfolios />}
            />
            <Modal
                className="buttons-dashboard"
                trigger={<Button className="buttons-dashboard">Repositorios</Button>}
                header='Inserir novo repositório'
                content={<Repositories />}
            />
            <Modal
                className="buttons-dashboard"
                trigger={<Button className="buttons-dashboard">Contatos</Button>}
                header='Cadastrar novo contato'
                content={<Contacts />}
            />
        </center>
    </div>

    )
}
