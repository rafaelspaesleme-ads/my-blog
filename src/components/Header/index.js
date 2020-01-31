import React from 'react';
import DropdownSimple from './../../plugins/semantic/DropdownSimple';
import HeaderImage from './../../plugins/semantic/HeaderImage';

import './style.css';

const userAuth = localStorage.getItem('auth-token');

function verifyUserAuth() {
    if (userAuth !== null){
        return 'Welcome my Blog'
    } else {
        return (
            <HeaderImage 
                avatarFollower={'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png'} 
                nameFollower={'Teste'} 
            />
        )
    }
}

const Header = () => (
        <header id="main-header">
            <div id="main-left">Cabeçalho</div>
            <div id="main-center">
                {verifyUserAuth()}
            </div>
            <div id="main-right">
                <DropdownSimple 
                    loginDrop={'/login'} 
                    userDrop={'/novo-usuario'} 
                    sharedDrop={'/shared-blog'}
                />
            </div>
        </header>
    )

export default Header;