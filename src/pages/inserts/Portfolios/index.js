import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Divider } from 'semantic-ui-react'
import PortfolioForm from './../../../plugins/semantic/PortfolioForm'
import ListFloated from './../../../plugins/semantic/ListFloated'

function Portfolios(props) {
    return (
        
        <div>
            <Grid className="main-posts" >
                <Grid.Row>
                    <PortfolioForm />
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

Portfolios.propTypes = {

}

export default Portfolios

