import React from 'react';
import '../../css/error.css';

export default ({input,label,meta})=>{
    return (
        <div>
            <label>{label}</label>
            <input id="field" {...input}/>
            <div className="red-text error">
                {meta.touched? meta.error :""}
            </div>
        </div>
    )
}