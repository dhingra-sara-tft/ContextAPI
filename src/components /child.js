import React from 'react'
import './child.css';

const Child = (props) => {
    return (
        <div className ='container'>
            <button className='btnstyle' onClick={props.ParentHandler}>{props.title}</button>
            
        </div>
    )
}

export default Child;
