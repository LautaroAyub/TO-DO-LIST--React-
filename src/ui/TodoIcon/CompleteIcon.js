import React from 'react';

import { TodoIcon } from '.';

function CompleteIcon({completed,onComplete}){
  const root = document.querySelector(":root")
  const gray=getComputedStyle(root).getPropertyValue('--gray');
  const green= getComputedStyle(root).getPropertyValue('--green');
    return  ( <TodoIcon 
        type="check"
        color={completed? green : gray }
        className={`${completed && "icon-check--active"}`}
        onClick={onComplete}
    />)
}
export {CompleteIcon}