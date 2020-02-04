import React from 'react'
import Option from './Option'

// Options component here

const Options = (props) => {
  return (
    <div>
      <div className="widget-header">
        <h2 className="widget-header__title">Your Options</h2>
        <button
          className="button button--link"
          onClick={props.handleDeleteOptions}
        >
          Remove All
         </button>
      
      </div>

      {props.options.length === 0 && <p className="widget--message">Please Add an option to get started! </p>}
      {
        props.options.map((opt,index) => (
          <Option
            key={opt}
            count={index+1}
            OptionText={opt}
            handleDeleteOption={props.handleDeleteOption}
          />
        )
        )
      }

    </div>


  );


};


export default Options;