import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

const Header = ({ setYear, setSearch }) => {
  const handleYear = (e) => {
    setYear(e.target.value);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="grid grid-cols-3 justify-between items-center">
      <h5 className="text-2xl font-bold py-4">Movie List</h5>
      <input
        onChange={(e) => handleSearch(e)}
        type="text"
        placeholder="Search"
        className="p-2 rounded-xl bg-transparent border-2 border-primary"
      />
      <div className="flex items-center justify-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost m-1">
            Filter By Year <AiFillCaretDown className="ml-3" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <select onChange={(e) => handleYear(e)} className="select w-full">
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
            </select>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
