import React, { useState } from 'react';
import { Input, Segment, Button, Grid, Form, Label, Icon, Radio } from 'semantic-ui-react'

import api from '../../../services/apiPrivate'

import './style.css'

//=============================================================================

const newListFormation = [];
const newListLearnings = [];

export default function PortfolioForm() {
    const [title, setTitle]= useState('');
    const [subTitle, setSubTitle]= useState('');
    const [job, setJob]= useState('');
    const [whatsApp, setWhatsApp]= useState('');
    const [mail, setMail]= useState('');
    const [phone, setPhone]= useState('');
    const [formationsOrCourses, setFormationsOrCourses]= useState([]);
    const [titleFormation, setTitleFormation]= useState('');
    const [institutionFormation, setInstitutionFormation]= useState('');
    const [dateInitialFormation, setDateInitialFormation]= useState('');
    const [dateFinalFormation, setDateFinalFormation]= useState('');
    const [activeFormation, setActiveFormation]= useState(true);
    const [typeCoursesFormation, setTypeCoursesFormation]= useState('');
    const [learnings, setLearnings]= useState([]);
    const [titleLearning, setTitleLearning]= useState('');
    const [levelLearning, setLevelLearning]= useState('');
    const [activeLearning, setActiveLearning]= useState(true);
    const [active, setActive]= useState(true);
    const [socialMediaDTO, setSocialMediaDTO]= useState({});
    const [urlGitHubSM, setUrlGitHubSM]= useState('');
    const [urlLinkedInSM, setUrlLinkedInSM]= useState('');
    const [urlTwitterSM, setUrlTwitterSM]= useState('');
    const [urlYouTubeSM, setUrlYouTubeSM]= useState('');
    const [urlInstagramSM, setUrlInstagramSM]= useState('');
    const [urlMySiteSM, setUrlMySiteSM]= useState('');
    const [urlPodCastSM, setUrlPodCastSM]= useState('');
    const [urlMyBlogSM, setUrlMyBlogSM]= useState('');
    const [activeSM, setActiveSM]= useState(true);
    const [seguidorDTO, setSeguidorDTO]= useState({});
    const [usernameFollower, setUsernameFollower]= useState('');
    const [passwordFollower, setPasswordFollower]= useState('');
    const [nameFollower, setNameFollower]= useState('');
    const [surnameFollower, setSurnameFollower]= useState('');
    const [mailFollower, setMailFollower]= useState('');
    const [whatsAppFollower, setWhatsAppFollower]= useState('');
    const [urlImageAvatarFollower, setUrlImageAvatarFollower]= useState('');
    const [aboutFollower, setAboutFollower]= useState('');
    const [activeFollower, setActiveFollower]= useState(false);
    const [profissaoDTO, setProfissaoDTO]= useState({});
    const [titlePro, setTitlePro]= useState('');
    const [activePro, setActivePro]= useState(false);
    const [urlImage, setUrlImage]= useState('');
    const [listFormation, setListFormation]= useState([]);
    const [listLearnings, setListLearnings]= useState([]);
    //fail success
    const [fail, setFail]= useState([]);
    const [success, setSuccess]= useState([]);

    async function handleSetPortfolio(e) {
        e.preventDefault();
        const dataFormation = []

        const dataLearnings = []

        listFormation.forEach((formation) => {
            dataFormation.push({
                title: formation.data.titleFormation,
                institution: formation.data.institutionFormation,
                dateInitial: formation.data.dateInitialFormation,
                dateFinal: formation.data.dateFinalFormation,
                typeCourses: formation.data.typeCoursesFormation,
                active: formation.data.activeFormation
            })
        })

        listLearnings.map((learning) => {
            dataLearnings.push({
                title: learning.data.titleLearning,
                level: learning.data.levelLearning,
                active: learning.data.activeLearning                
            })
        })

        const data = {
            portfolioDTO: {
                urlImage,
                title,
                subTitle,
                job,
                whatsApp,
                mail,
                phone,
                formationsOrCourses: dataFormation,
                learnings: dataLearnings,
                active
            },
            socialMediaDTO: {
                urlGitHub: urlGitHubSM,
                urlLinkedIn: urlLinkedInSM,
                urlTwitter: urlTwitterSM,
                urlYouTube: urlYouTubeSM,
                urlInstagram: urlInstagramSM,
                urlMySite: urlMySiteSM,
                urlPodCast: urlPodCastSM,
                urlMyBlog: urlMyBlogSM,
                active: activeSM
            },
            seguidorDTO: {
                username: '',
                password: '',
                name: '',
                surname: '',
                mail: '',
                whatsApp: '',
                urlImageAvatar: '',
                about: '',
                active: false
            },
            profissaoDTO: {
                title: '',
                active: false
            } 
        }
        if (!title && !job) {
        setFail("Preencha os campos obrigatorios!")
        } else {
            await api.post("/portfolio/salvar", data)
            .then((response) => {
                setSuccess("Portfólio cadastrado com sucesso!")
                alert("Salvo com sucesso!")
            })
            .catch((error) => {
                console.log(error)
                setFail("Erro ao realizar cadastro deste portfólio!")
            })
        }
    }

    function handleAddFormation(e){
        e.preventDefault();
        const data = {
            titleFormation,
            institutionFormation,
            dateInitialFormation,
            dateFinalFormation,
            activeFormation,
            typeCoursesFormation
        }

        newListFormation.push({data});

        setListFormation(newListFormation);
    };

    function handleAddLearnings(e){
        e.preventDefault();
        const data = {
            titleLearning,
            levelLearning,
            activeLearning
        }

        newListLearnings.push({data});

        setListLearnings(newListLearnings);
    };
      /**
       * form to -> onSubmit={handleSetPortfolio}
       */
    return (
        <Form onSubmit={handleSetPortfolio}>
            <Grid className="main-grid" >
                <Grid.Row className="main-grid-row">
                    <Input className="main-input" 
                            label='Url de imagem' 
                            value={urlImage}
                            placeholder='Url de uma imagem para seu portfolio' 
                            onChange={e => setUrlImage( e.target.value )} 
                    />
                    <Input className="main-input" 
                            label='Titulo' 
                            value={title}
                            placeholder='Insira um titulo' 
                            onChange={e => setTitle( e.target.value )} 
                    />
                    <Input className="main-input" 
                            label='Subtitulo' 
                            value={subTitle}
                            placeholder='Insira um subtitulo' 
                            onChange={e => setSubTitle( e.target.value )}  
                    />
                    <Input className="main-input" 
                            label='Trabalho' 
                            value={job}
                            placeholder='Insira seu trabalho atual' 
                            onChange={e => setJob( e.target.value )}
                    />
                </Grid.Row>

                <Grid.Row className="main-grid-row">
                    <Input className="main-input" 
                            label='api.whatsapp' 
                            placeholder='Insira seu número whatsapp' 
                            icon='whatsapp' 
                            value={whatsApp}
                            onChange={e => setWhatsApp( e.target.value )}
                    />
                    <Input className="main-input" 
                            label='mailto:' 
                            placeholder='Insira seu email' 
                            icon='mail' 
                            value={mail}
                            onChange={e => setMail( e.target.value )}
                    />
                    <Input className="main-input" 
                            label='tel:' 
                            placeholder='Insira seu telefone' 
                            icon='teletype' 
                            value={phone}
                            onChange={e => setPhone( e.target.value )}
                    />
                </Grid.Row>

                <Grid.Row className="main-grid-row">
                    <Input className="main-input" 
                            label='http(s)://' 
                            placeholder='Insira seu github' 
                            icon='github' 
                            value={urlGitHubSM}
                            onChange={e => setUrlGitHubSM( e.target.value )}
                    />
                    <Input className="main-input" 
                            label='http(s)://' 
                            placeholder='Insira seu linkedin' 
                            icon='linkedin' 
                            value={urlLinkedInSM}
                            onChange={e => setUrlLinkedInSM( e.target.value )}
                    />
                    <Input className="main-input" 
                            label='http(s)://' 
                            placeholder='Insira seu twitter' 
                            icon='twitter' 
                            value={urlTwitterSM}
                            onChange={e => setUrlTwitterSM( e.target.value )}
                    />
                    <Input className="main-input" 
                            label='http(s)://' 
                            placeholder='Insira seu canal' 
                            icon='youtube' 
                            value={urlYouTubeSM}
                            onChange={e => setUrlYouTubeSM( e.target.value )}
                    />
                    <Input className="main-input" 
                            label='http(s)://' 
                            placeholder='Insira seu instagram' 
                            icon='instagram' 
                            value={urlInstagramSM}
                            onChange={e => setUrlInstagramSM( e.target.value )}
                    />
                    <Input className="main-input" 
                            label='http(s)://' 
                            placeholder='Insira seu site' 
                            icon='html5' 
                            value={urlMySiteSM}
                            onChange={e => setUrlMySiteSM( e.target.value )}
                    />
                    <Input className="main-input" 
                            label='http(s)://' 
                            placeholder='Insira seu blog' 
                            icon='feed' 
                            value={setUrlMyBlogSM}
                            onChange={e => setUrlMyBlogSM( e.target.value )}
                    />
                    <Input className="main-input" 
                            label='http(s)://' 
                            placeholder='Insira seu podcast' 
                            icon='sound' 
                            value={urlPodCastSM}
                            onChange={e => setUrlPodCastSM( e.target.value )}
                    />
                </Grid.Row>

                <Grid.Row className="main-grid-row main-subgrid-row">
                    <Grid.Row >
                        <Grid.Column className="main-grid-col">
                            <Label className="main-label-formation">Formações e cursos</Label>
                            <Input 
                                className="main-input-formation"
                                label='Titulo' 
                                placeholder='Insira suas formações' 
                                value={titleFormation}
                                onChange={e => setTitleFormation( e.target.value )}         
                            />
                            <Input 
                                className="main-input-formation"
                                label='Instituição' 
                                placeholder='Insira suas formações' 
                                value={institutionFormation}
                                onChange={e => setInstitutionFormation( e.target.value )}              
                            />
                            <Input 
                                type="date"
                                className="main-input-formation"
                                label='Inicio' 
                                placeholder='Insira suas formações' 
                                value={dateInitialFormation}
                                onChange={e => setDateInitialFormation( e.target.value )}            
                            />
                            <Input 
                                type="date"
                                className="main-input-formation"
                                label='Fim' 
                                placeholder='Insira suas formações' 
                                value={dateFinalFormation}
                                onChange={e => setDateFinalFormation( e.target.value )}             
                            />
                            
                            <div className='div-radio-formation' >
                                <Radio
                                    className='radio-portfolio'
                                    label='Curso'
                                    name='radioGroup'
                                    value='COURSE'
                                    checked={typeCoursesFormation === 'COURSE'}
                                    onChange={e => setTypeCoursesFormation('COURSE')}
                                />
                                <Radio
                                    className='radio-portfolio'
                                    label='Academico'
                                    name='radioGroup'
                                    value='ACADEMY'
                                    checked={typeCoursesFormation === 'ACADEMY'}
                                    onChange={e => setTypeCoursesFormation('ACADEMY')}
                                />
                            </div>
                            
                            <Button 
                                className="main-label-formation" 
                                onClick={handleAddFormation}
                            >
                                    <Icon name="student" color="black"/> Inserir
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className="main-grid-row-segment">
                    <Segment.Group className="main-segment-group-formation">
                        {listFormation.map(itemFormation => (
                            <Segment key={itemFormation.data.titleFormation} clearing className="main-segment-native">
                            <h5 className="color-h5" >{itemFormation.data.titleFormation}</h5>
                            </Segment>
                        ))}
                    </Segment.Group>
                    </Grid.Row>
                </Grid.Row>
          
                <Grid.Row className="main-grid-row main-subgrid-row">
                    <Grid.Row >
                        <Grid.Column className="main-grid-col">
                                <Label className="main-label-formation">Niveis de conhecimento</Label>
                                <Input 
                                    className="main-input-formation"
                                    label='Titulo' 
                                    placeholder='Nome da qualificação' 
                                    value={titleLearning}
                                    onChange={e => setTitleLearning( e.target.value )}         
                                />
                                <Input 
                                    className="main-input-formation"
                                    type="number"
                                    label='Nivel (%)' 
                                    placeholder='Porcentagem da qualificação' 
                                    value={levelLearning}
                                    onChange={e => setLevelLearning( e.target.value )}              
                                />
                                
                                <Button 
                                    className="main-label-formation" 
                                    onClick={handleAddLearnings}
                                >
                                        <Icon name="student" color="black"/> Inserir
                                </Button>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className="main-grid-row-segment">
                    <Segment.Group className="main-segment-group-formation">
                        {listLearnings.map(itemLearning => (
                            <Segment key={itemLearning.data.titleLearning} clearing className="main-segment-native">
                            <h5 className="color-h5" >{itemLearning.data.titleLearning} - {itemLearning.data.levelLearning} (%)</h5>
                            </Segment>
                        ))}
                    </Segment.Group>
                    </Grid.Row>
                </Grid.Row>

                <Grid.Row>
                    <Button 
                        className="main-button-save"
                        type="submit" 
                    >
                        Salvar
                    </Button>
                </Grid.Row>
            </Grid>
        </Form>
    );
}
