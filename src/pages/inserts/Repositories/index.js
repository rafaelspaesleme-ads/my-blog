import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Divider } from 'semantic-ui-react'
import FormFieldControlId from './../../../plugins/semantic/FormFieldControlId'
import ListFloated from './../../../plugins/semantic/ListFloated'

function Repositories(props) {
    return (
        <div>
            <Grid className="main-posts" >
                <Grid.Row>
                    <FormFieldControlId />
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

Repositories.propTypes = {

}

export default Repositories

