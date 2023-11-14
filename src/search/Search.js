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
        className={stylee.input}
        placeholder="напишіть щось..."
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />
    </div>
  );
}
export default Search;
