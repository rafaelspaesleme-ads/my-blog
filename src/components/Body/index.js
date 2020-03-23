import React from 'react';

import './style.css';

const Body = (props) => (
    <body id="main-body">
        {props.contentHeader}
        <div id="main-pages">
            {props.contentBody}
        </div>
        {props.contentFooter}
    </body>
)

export default Body;