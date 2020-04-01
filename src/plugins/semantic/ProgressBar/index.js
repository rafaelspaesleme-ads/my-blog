import React from 'react';
import { Progress } from 'semantic-ui-react'
import './style.css'


export default function ProgressBar(props) {
  const colored = props.colorProgress;

  return (
    <Progress className="item-progress" label={props.titleProgress} percent={props.percentageProgress} color={colored} progress />
  );
}
