import React from 'react'

export default function UserOutput(props) {

    if (props.name !== undefined) {
        return (
            <div onClick={props.click}>
                <p>{props.name} is the user - {props.paraNum}</p>
            </div>
        );
    } else {
        return (
            <div>
                <p>This is paragraph {props.paraNum}</p>
            </div>
        );
    }
}
