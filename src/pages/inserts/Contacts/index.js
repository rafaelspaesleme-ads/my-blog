import React from 'react'

import { Grid, Divider } from 'semantic-ui-react'

import PropTypes from 'prop-types'
import ContactForm from './../../../plugins/semantic/ContactForm'
import ListFloated from './../../../plugins/semantic/ListFloated'

import './style.css'

function Contacts(props) {
    return (
        <div>
            <Grid className="main-contact" >
                <Grid.Row>
                    <ContactForm />
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

Contacts.propTypes = {

}

export default Contacts