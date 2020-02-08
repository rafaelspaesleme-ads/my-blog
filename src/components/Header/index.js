import React from 'react';
import DropdownSimple from './../../plugins/semantic/DropdownSimple';
import HeaderImage from './../../plugins/semantic/HeaderImage';

import './style.css';

const userAuth = localStorage.getItem('auth-token');

const followerId = 1;

const content = "Conheça o blog https://rplproject.com e fique por dentro de tudo o que acontece no mercado de TI.";

const sharedWhatsapp = `https://api.whatsapp.com/send?text=${content}`;

function verifyUserAuth() {
    if (userAuth !== null){
        return (
            <>
            <div id="main-left">
            </div>
            <div id="main-center">
                <strong id="main-title-blog">
                    <HeaderImage 
                        avatarFollower={'https://avatars2.githubusercontent.com/u/11760799?s=460&v=4'} 
                        nameFollower={'RPL Project'} 
                        subNameFollower={', o blog sobre tecnologia!'}
                    /> 
                </strong>
            </div>
            <div id="main-right">
                <DropdownSimple 
                    iconItemOne='sign-in' 
                    iconItemTwo='user plus' 
                    iconItemThree='share square' 

                    nameItemOne='Login' 
                    nameItemTwo='Novo Usuário' 
                    nameItemThree='Compartilhar' 
                    typeTargetOne={null}

                    linkItemOne='/login' 
                    linkItemTwo='/new-follower' 
                    linkItemThree={sharedWhatsapp} 
                    typeTargetTwo='_blank'
                />
            </div>
            </>    
        )
    } else {
        return (
            <>
            <div id="main-left">
                <HeaderImage 
                    avatarFollower={'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png'} 
                    nameFollower={'Teste'} 
                />
            </div>
            <div id="main-center">
                <strong id="main-title-blog">
                    <HeaderImage 
                        avatarFollower={'https://avatars2.githubusercontent.com/u/11760799?s=460&v=4'} 
                        nameFollower={'RPL Project'} 
                        subNameFollower={', o blog sobre tecnologia!'}
                    /> 
                </strong>
            </div>
            <div id="main-right">
                <DropdownSimple 
                    iconItemOne='user circle' 
                    iconItemTwo='share square' 
                    iconItemThree='sign-out' 

                    nameItemOne='Meu Perfil' 
                    nameItemTwo='Compartilhar' 
                    nameItemThree='Logoff' 

                    linkItemOne={`/profile/follower/${followerId}`} 
                    linkItemTwo={sharedWhatsapp} 
                    linkItemThree='/logoff' 
                />
            </div>
            </>        
        )
    }
}

const Header = () => (
    <header id="main-header">
        {verifyUserAuth()}
    </header>
)

export default Header;