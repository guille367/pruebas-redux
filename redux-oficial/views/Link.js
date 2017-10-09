const Link = (active, children, onClick) => {
  if(active)
    return <span>{ type }</span>

  return (
    <a href="#"
     onClick = { (e) => {
        e.preventDefault();
        onClick();
      } 
     }> 
     { children }
    </a>        
  );
}

export default Link;