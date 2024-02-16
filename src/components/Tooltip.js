import React, {useState} from "react";

export const Tooltip = ({text, children}) => {
    const [showTooltip, setShowTooltip] = useState(false);
  
      const show = () => {
        setShowTooltip(true);
      }
  
      const hide = () => {
        setShowTooltip(false);
      }
  
      return <>
       { showTooltip && <div className="tooltip">
          <b className="tooltiptext">{text}</b>
        </div>}
        <div onMouseEnter={show} onMouseLeave={hide}>
          {children}
        </div>
      </>
  }
  