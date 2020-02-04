import React from 'react'


const Option =(props)=>{
    return (
        <div className="options">
        <p className="options__text">{props.count}.{props.OptionText}</p>
      
        <button 
        className="button button--link"
        onClick={(e)=>{
            props.handleDeleteOption(props.OptionText);
            
        }}
        >
        Remove
        </button>       
        </div>
     )

}


export default Option;