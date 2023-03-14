import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavLink(props) {

    var isActive = context.router.route.location.pathname === props.to;
    var className = isActive ? 'active' : '';

    return (
        <Link className={`side-menu__link ${className}`} {...props}>
            <span className='menu-item-icon'><FontAwesomeIcon icon={props.icon} /></span>
            {props.text}
        </Link>
    );
}

NavLink.contextTypes = {
    router: PropTypes.object
};

export default NavLink;