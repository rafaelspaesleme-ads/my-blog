import React from 'react';
import { Icon } from 'semantic-ui-react'

import './style.css';

const pic = [" > "," < "];

const Footer = () => (
    <footer id="main-footer">
        <div id="footer-left"> {pic[0]} <a href="" ><Icon name="book" />Documentações</a></div>
        <div id="footer-center">Copyright &copy; - <a href="https://www.gitshowcase.com/rafaelspaesleme-ads" target="_blank" >rafaelspaesleme-ads</a> </div>
        <div id="footer-right"><a href="" >Api's <Icon name="cogs" /></a> {pic[1]} </div>
    </footer>
)

export default Footer;