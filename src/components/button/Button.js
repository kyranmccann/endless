import React from 'react'; 
import './Button.css';

function Button({ text, type }) {
  return (
    <div className={`btn ${type}`}>
      <a href="#how-it-works">
        <p>
          {text}
        </p>
        <div className="btn-hover top" />
        <div className="btn-hover btm" />
      </a>
    </div>
  )
}

// export default React.memo(Button);

export default React.memo(Button); 
