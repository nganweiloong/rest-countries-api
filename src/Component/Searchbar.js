import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Searchbar() {
  return (
    <div className="search-container">
      <div className="search-input d-flex">
        <label for="search-country">
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </label>
        <input
          className="search-country"
          id="search-country"
          placeholder="Search for a country.."
        />
      </div>
      <div className="search-input select-wrapper">
        <select
          className="search-region"
          name="search-region"
          id="search-region"
        >
          <option selected disabled>
            Filter by Region
          </option>
          <option value="all">All</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default Searchbar;