import React from 'react'

import { Grid, Divider } from 'semantic-ui-react'

import PropTypes from 'prop-types'
import PostForm from './../../../plugins/semantic/PostForm'
import ListFloated from './../../../plugins/semantic/ListFloated'

import './style.css'

function Posts(props) {
    return (
        <div>
            <Grid className="main-posts" >
                <Grid.Row>
                    <PostForm />
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

Posts.propTypes = {

}

export default Posts

