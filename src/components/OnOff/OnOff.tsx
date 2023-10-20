import React, {useState} from 'react';
import classes from "./UncontrolledOnOff.module.css";

type onOffType = {
    onClick: (switchValue: boolean) =>void
    on: boolean
}
export const OnOff = (props:onOffType) => {

    const onStyle = {
        height: '40px',
        width:'60px',
        border: '1px solid black',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        height: '40px',
        width:'60px',
        border: '1px solid black',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        height: '30px',
        width:'30px',
        border: '1px solid black',
        borderRadius: '50%',
        backgroundColor: props.on ? 'green' : 'red'

    }

    return (
    <div style={{display: 'flex', gap: '10px'}}>
        <div onClick={() => {props.onClick(true)}} style={onStyle}>On</div>
        <div onClick={() => {props.onClick(false)}} style={offStyle}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
    )

};

