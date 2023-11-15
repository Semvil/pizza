import React from "react";
import stylee from "./Search.module.scss";

function Search({ searchValue, setSearchValue }) {
  return (
    <div className={stylee.root}>
      <svg
        className={stylee.icon}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>

      <input
        value={searchValue}
        className={stylee.input}
        placeholder="напишіть щось..."
        onChange={(event) => {
          setSearchValue(event.target.value);
          console.log(event.target.value);
        }}
      />
      {searchValue && (
        <svg
          className={stylee.xicon}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          onClick={() => setSearchValue("")}
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      )}
    </div>
  );
}
export default Search;
