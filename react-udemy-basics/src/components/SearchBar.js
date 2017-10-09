import React from 'react';

const SearchBar = ({onSearchChange}) => {
  return (
      <input className="input-group form-control"
              onChange={e => onSearchChange(e.target.value)}/>
  );
}

export default SearchBar;