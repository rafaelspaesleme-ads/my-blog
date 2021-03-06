import React, { useState, useEffect } from 'react';
import { Breadcrumb, Container, Divider } from 'semantic-ui-react';
import { Link, useParams } from 'react-router-dom';
import api from './../../../services/api';
import './style.css'

export default function ShowPost() {
    const { idPost, titlePost } = useParams();
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [description, setDescription] = useState('');
    const [text, setText] = useState('');
    const [datePost, setDatePost] = useState('');

    useEffect(() => {
        api.get(`/postagem/buscar/codigo/${idPost}`)
        .then(response => {
            setTitle(response.data.title);
            setSubTitle(response.data.subTitle);
            setDescription(response.data.description);
            setText(response.data.text)
            setDatePost(response.data.datePost);
        })
        .catch(err => {
            alert(`Erro ao retornar dados!\nInfo: ${err}`);
        })
    }, [idPost]);
    
    const sections = [
        { key: 'Home', content: 'Home', link: true },
        { key: 'Post', content: 'Post', link: true },
    ]


    return (
        <div className="div-general" >
            <Breadcrumb className="breadcrump" icon='right angle' sections={sections} />

            <div className="div-container">
                <Container textAlign='left'>
                    <Link to="/" >Voltar</Link>
                </Container>
                <Container 
                    className='container-title'
                    textAlign='center'
                >
                    <h1>{title}</h1>
                </Container>
                <Container textAlign='right'>
                    <strong>Data da postagem: {datePost.replace('T', ' - ')}</strong>
                </Container>
                <Container 
                    className='container-description'
                    textAlign='justified'
                >
                <b>{subTitle}</b>
                <Divider />
                    <h4 
                        className='paragraph-text'
                        dangerouslySetInnerHTML={{__html: description}} 
                    />
                    <p 
                        className='paragraph-text'
                        dangerouslySetInnerHTML={{__html: text}} 
                    />
                </Container>
            </div>
        </div>
    )
}
