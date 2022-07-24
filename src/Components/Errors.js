import React from 'react'

function Errors(props) {
    return (
        <div>
            {
                props.errors.map((error, idx) => (
                    <div key={idx}>
                        <span >{error.value}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Errors