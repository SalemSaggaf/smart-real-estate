import React from 'react';
import {AreaCardStyle, AreaCardHeaderStyle, AreaCardAreaSnippetStyle, AreaCardActionsStyle, AreaCardActionStyle} from './AreaCardStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './AreaCard.css'
import areas from '../../Data/Areas';
import {  toast } from 'react-toastify';

function AreaCard({title, img, id}) {

    const navigate = useNavigate();

    const addArea = (e) => {
        const currentAreas = JSON.parse(localStorage.getItem('areas'));
        
        const newArea = areas.find(item => item.id === id);
        if (currentAreas) {
            currentAreas.push(newArea);
            localStorage.setItem('areas', JSON.stringify(currentAreas));
        } else {
            localStorage.setItem('areas', JSON.stringify([newArea]));
        }
        toast("تمت اضافة المساحة الى المفضلة");
    }

    const showMoreDetails = (e) => {
        
        navigate('/areas/'+id);
    }

    return (
        <div style={AreaCardStyle}>
            <h1 style={AreaCardHeaderStyle}>{title}</h1>
            <div style={{...AreaCardAreaSnippetStyle, backgroundImage: `url(${img})`}}>
            </div>
            
            <div style={AreaCardActionsStyle}>
                <button className='AreaCardActionStyle' onClick={showMoreDetails}><FontAwesomeIcon style={{color: '#325aa8'}} icon={faCircleInfo}/></button>
                <button className='AreaCardActionStyle' onClick={addArea}><FontAwesomeIcon style={{color: 'red'}} icon={faHeart}/></button>
            </div>
        </div>
    )
}

export default AreaCard;