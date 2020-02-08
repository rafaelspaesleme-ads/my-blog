import React from 'react'
import { Image } from 'semantic-ui-react'
import './style.css'

export default function ImageAvatar(props) {
    return (<Image id="main-avatar" src={props.imageUrlAvatar} size={props.sizeImageAvatar} />)
}
