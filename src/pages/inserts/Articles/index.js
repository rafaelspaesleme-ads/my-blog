import React from 'react'

import { Grid, Divider } from 'semantic-ui-react'

import PropTypes from 'prop-types'
import ArticleForm from './../../../plugins/semantic/ArticleForm'
import ListFloated from './../../../plugins/semantic/ListFloated'

import './style.css'

function Article(props) {
    return (
        <div>
            <Grid className="main-article" >
                <Grid.Row>
                    <ArticleForm />
                </Grid.Row>
                
                <Grid.Row>
                    <Divider />
                </Grid.Row>
                
                <Grid.Row>
                    <ListFloated />
                </Grid.Row>
            
            </Grid>
        </div>
    )
}

Article.propTypes = {

}

export default Article