import React from 'react';
import './SideMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMap } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

function SideMenu(props) {

    console.log('SideMenu props: ', props)

    return (
        <div className="side-menu">
        <div className="side-menu__header">
            <h2 className="side-menu__title">القائمة</h2>
        </div>
        <div className="side-menu__content">
            {/* <ul className="side-menu__list"> */}
                {/* <li className="side-menu__item"> */}
                    <NavLink className="side-menu__item" activeclassname="active" to="/"><span className='menu-item-icon'><FontAwesomeIcon icon={faHouse} /></span>الصفحة الرئيسية</NavLink>
                    <NavLink className="side-menu__item" activeclassname="active" to="/areas"><span className='menu-item-icon'><FontAwesomeIcon icon={faMap} /></span>خريطة المساحات</NavLink>
                {/* </li> */}
                {/* <li className="side-menu__item"> */}
                    {/* <a className="side-menu__link" href="/areas"></a> */}
                {/* </li> */}

            {/* </ul> */}
        </div>
        </div>
    );
}

export default SideMenu;