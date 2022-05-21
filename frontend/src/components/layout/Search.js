import React, { useState } from "react";

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <form onSubmit={searchHandler}>
      <div className="input-group rounded-0">
        <input
          type="text"
          id="search_field"
          className="form-control rounded-0"
          placeholder="Enter Product Name ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <div className="input-group-append">
          <button
            id="search_btn"
            className="btn bg-success text-white rounded-0"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
