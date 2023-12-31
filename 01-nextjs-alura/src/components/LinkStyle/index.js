import React from "react";

const LinkStyle = React.forwardRef(({cor, onClick, href, children }, ref) => {
  return (<a href={href} onClick={onClick} ref={ref} style={{color: cor}}>
    {children}
  </a>)
});

export default LinkStyle