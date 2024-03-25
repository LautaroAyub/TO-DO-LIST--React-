import React from "react";
import "./TodoIcon.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';


const iconTypes={
    "check": (color)=><FontAwesomeIcon icon={faCircleCheck} className="icon "
    style={{color: color}}
   />
    ,"delete":(color)=><FontAwesomeIcon icon={faCircleXmark} className="icon"
    style={{color: color}}
    />,
}


function TodoIcon ({type, color, onClick}){
    return ( 
    <span className= {`icon-container icon-container-${type}`}
    onClick={onClick}>
       {iconTypes[type](color)}
    </span>)
}
 export {TodoIcon}