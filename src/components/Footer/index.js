import React from 'react';
import { Icon } from 'semantic-ui-react'

import './style.css';

const pic = [" > "," < "];

const urlsFooters = [
                        `https://github.com/rafaelspaesleme-ads/${'my-blog'}/blob/master/README.md`,
                        `https://www.gitshowcase.com/rafaelspaesleme-ads`,
                        `https://github.com/rafaelspaesleme-ads?utf8=%E2%9C%93&tab=repositories&q=${'rpl-lib-api-'}&type=&language=${'Java'}`
                    ];

const Footer = () => (
    <footer id="main-footer">
        <div id="footer-left"> {pic[0]} <a target="_blank" href={urlsFooters[0]} ><Icon name="book" />Documentações</a></div>
        <div id="footer-center">Copyright &copy; - <a href={urlsFooters[1]} target="_blank" >rafaelspaesleme-ads</a> </div>
        <div id="footer-right"><a target="_blank" href={urlsFooters[2]} >Api's <Icon name="cogs" /></a> {pic[1]} </div>
    </footer>
)

export default Footer;