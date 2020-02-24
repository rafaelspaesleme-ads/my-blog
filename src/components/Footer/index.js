import React from 'react';
import { Icon, Grid, Container } from 'semantic-ui-react'

import './style.css';

const pic = [" > "," < "];

const urlsFooters = [
                        `https://github.com/rafaelspaesleme-ads/${'my-blog'}/blob/master/README.md`,
                        `https://www.gitshowcase.com/rafaelspaesleme-ads`,
                        `https://github.com/rafaelspaesleme-ads?utf8=%E2%9C%93&tab=repositories&q=${'rpl-lib-api-'}&type=&language=${'Java'}`,
                        `https://instagram.com/rafaelspaesleme`,
                        `https://twitter.com/PaesSerdeiro`,
                        `https://aws-dev-workspace.slack.com/archives/DHFRR7BN2`,
                        `https://avantewebservices.com.br/politicas/privacidade-de-dados`,
                        `https://linktr.ee/rafaelspaesleme`
                    ];

const Footer = () => (
    <footer>
        <Grid className="main-footer" >
            <Grid.Column className="footer-left" >
                <Grid.Row className="footer-cola-rowa" >
                    
                </Grid.Row>
                <Grid.Row className="footer-cola-rowb" >
                    
                </Grid.Row>
                <Grid.Row className="footer-cola-rowc" >
                    <Icon name="linkify" /> <a target="_blank" href={urlsFooters[7]} >Links</a>
                </Grid.Row>
                <Grid.Row className="footer-cola-rowd" >
                    {pic[0]} <a target="_blank" href={urlsFooters[0]} ><Icon name="book" />Documentações</a>
                </Grid.Row>
            </Grid.Column>
            <Grid.Column className="footer-center" >
                <Grid.Row className="footer-colb-rowa" >
                    
                </Grid.Row>
                <Grid.Row className="footer-colb-rowb" >
                    
                </Grid.Row>
                <Grid.Row className="footer-colb-rowc" >
                    <Icon name="privacy" /> <a target="_blank" href={urlsFooters[6]} >Privacidade</a>
                </Grid.Row>
                <Grid.Row className="footer-cola-rowd" >
                    Copyright &copy; - <a href={urlsFooters[1]} target="_blank" >rafaelspaesleme-ads</a>
                </Grid.Row>
            </Grid.Column>
            <Grid.Column className="footer-right" >
                <Grid.Row className="footer-colc-rowa" >
                    <Icon name="instagram" /> <a target="_blank" href={urlsFooters[3]} >Instagram</a>
                </Grid.Row>
                <Grid.Row className="footer-colc-rowb" >
                    <Icon name="twitter" /> <a target="_blank" href={urlsFooters[4]} >Twitter</a>
                </Grid.Row>
                <Grid.Row className="footer-colc-rowc" >
                    <Icon name="slack" /> <a target="_blank" href={urlsFooters[5]} >Slack</a>
                </Grid.Row>
                <Grid.Row className="footer-cola-rowd" >
                    <a target="_blank" href={urlsFooters[2]} >Api's <Icon name="cogs" /></a> {pic[1]}
                </Grid.Row>
            </Grid.Column>
        </Grid>
    </footer>
)

export default Footer;