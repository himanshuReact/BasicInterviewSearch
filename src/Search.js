import React, { useState, useEffect } from "react";

const Search = ({ handleSearch }) => {
  return (
    <div>
      <div>
        <input type="text" onKeyUp={handleSearch}></input>
      </div>
    </div>
  );
};

export default Search;
