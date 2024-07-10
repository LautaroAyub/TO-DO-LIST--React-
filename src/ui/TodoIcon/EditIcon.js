import React from 'react';
import { TodoIcon } from './';

function EditIcon({onEdit}){
  const root = document.querySelector(":root")
  const gray=getComputedStyle(root).getPropertyValue('--gray');
  const green= getComputedStyle(root).getPropertyValue('--green');
    return  ( <TodoIcon 
        type="edit"
        color={gray}
        className={`icon-edit--active`}
        onClick={onEdit}
    />)
}
export {EditIcon}