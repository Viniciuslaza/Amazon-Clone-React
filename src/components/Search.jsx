import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

const Search = () => {
  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-amazonClone-yellow rounded">
        <select className="p-2 bg-gray-300 text-black border text-xs xl:text-sm">
          <option>All</option>
          <option>Deals</option>
          <option>Fashion</option>
          <option>Amazon</option>
          <option>Computers</option>
          <option>Mobiles</option>
          <option>Home</option>
        </select>
        <input
          className="flex grow items-center h-[100%] rounded-l text-black"
          type="text"
        />
        <button className="w-[45px]">
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
    </div>
  );
};

export default Search;
