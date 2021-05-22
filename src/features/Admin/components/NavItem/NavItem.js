import React from 'react'
import PropTypes from 'prop-types'

import './NavItem.css';

function NavItem(props) {
    const{item, isFocus, onClick} = props;

    return (
        <div className={isFocus?`NavItem isFocus` : `NavItem`} onClick={onClick}>
            {item.icon}
            <span>{item.content}</span>
        </div>
    )
}

NavItem.propTypes = {
    item: PropTypes.shape({
        icon: PropTypes.func,
        content: PropTypes.string
    }),
    isFocus: PropTypes.bool,
    onClick: PropTypes.func
}

export default NavItem

