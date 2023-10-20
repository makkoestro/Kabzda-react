import React, {useState} from 'react';
import classes from "./UncontrolledOnOff.module.css";

type UncontrolledOnOffType = {
    onChange: (value: boolean) => void
}
export const UncontrolledOnOff = (props: UncontrolledOnOffType) => {
    let [on, setState] = useState(false)
    let changeColorState = (status: boolean) => {
        setState(status)
    }

    const onStyle = {
        height: '40px',
        width: '60px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        height: '40px',
        width: '60px',
        border: '1px solid black',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        height: '30px',
        width: '30px',
        border: '1px solid black',
        borderRadius: '50%',
        backgroundColor: on ? 'green' : 'red'

    }
    const onClicked = (value: boolean) => {
        changeColorState(value)
        props.onChange(value)
    }


    return (
        <div style={{display: 'flex', gap: '10px'}}>
            <div
                onClick={() => onClicked(true)}
                style={onStyle}>On
            </div>

            <div onClick={() => onClicked(false)}
                 style={offStyle}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )

};

