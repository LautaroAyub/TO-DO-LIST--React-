import React from 'react';
import { TodoIcon } from './';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
// import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
{/* <FontAwesomeIcon icon={faCircleCheck} */}
// import { icon } from '@fortawesome/fontawesome-svg-core';

function CompleteIcon({completed,onComplete}){
    return  ( <TodoIcon 
        type="check"
        color={completed? "gray" : "green"}
        className={`icon icon-check  
        ${completed && "icon-check--active"}`}
        onClick={onComplete}
    />)
}
export {CompleteIcon}