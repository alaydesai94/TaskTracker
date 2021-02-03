import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button.js';
const onClick =() =>{
    console.log('Click occured')
}

const Header = ({title, onAdd, showAdd}) => {
    return (
        <div className="header">
            <h1>{title}</h1>
           <Button 
           color={showAdd ? 'red' : 'green'}  
           text ={showAdd ? 'close' : 'Add'} 
           onClick={onAdd}/>
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
