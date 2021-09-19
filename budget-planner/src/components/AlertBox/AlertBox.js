import React, { useState } from 'react';
import './AlertBox.css';

const AlertBox = (props) => {

    const [message, setMessage] = useState("")

    const error = props.error

    if (error === 1) {
        setMessage("Please enter valid expense")
    }

    return(
        <div className="AlertBox">
            <h1>Error: {message}</h1>
        </div>
    )
}

export default AlertBox;