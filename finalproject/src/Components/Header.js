import React from 'react'

function Header(props) {
    return (
        <h2 className='header'>
            Welcome to {props.name} {props.place}!
        </h2>
    )
}

export default Header