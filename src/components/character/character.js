import React, { useState } from "react";
import RenderCharacter from "./RenderCharacter";
import Pagination from "./Pagination";
import Search from "./Search";

const Character = () => {
  const [pagination, setPagination] = useState(1);
  const [searchName, setSearchName] = useState("");
  const [affiliation, setAffiliation] = useState("");

  const handlePrev = (event) => {
    event.preventDefault();
    if (pagination > 1) {
      setPagination(pagination - 1);
    }
  };

  const handleNext = (event) => {
    event.preventDefault();
    setPagination(pagination + 1);
  };

  const changeCharName = (event) => {
    event.preventDefault();
    setSearchName(event.target.name.value);
  };

  const changeAffiliation = (event) => {
    setAffiliation(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="text-center text-4xl">Avatar Characters</h1>
      <Search charName={changeCharName} affiliation={changeAffiliation} />
      <RenderCharacter
        pagination={pagination}
        searchName={searchName}
        affiliation={affiliation}
      />
      <Pagination handlePrev={handlePrev} handleNext={handleNext} />
    </div>
  );
};

export default Character;
