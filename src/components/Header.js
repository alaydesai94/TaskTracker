import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button.js';
const onClick =() =>{
    console.log('Click occured')
}

const Header = ({title}) => {
    return (
        <div className="header">
            <h1>{title}</h1>
           <Button color='green' text ='Add' onClick={onClick}/>
        </div>
    )
}

Header.defaultProps ={
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
