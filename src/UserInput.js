import React from 'react'

export default function UserInput(props) {
    return (
        <div>
            <input 
                type="text" 
                onChange={props.changed}
                value={props.name}
                placeholder={props.name}
            />
        </div>
    )
}
