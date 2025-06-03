import React from "react";

function Search({ isVisible, onClose }) {
  return (
    <div className={`search ${isVisible ? "show-search" : ""}`} id="search">
      <form className="search__form">
        <i className="ri-search-line search__icon"></i>
        <input
          type="search"
          placeholder="What are you looking for?"
          className="search__input"
        />
      </form>

      <i className="ri-close-line search__close" onClick={onClose}></i>
    </div>
  );
}

export default Search;
