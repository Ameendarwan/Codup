import React from "react";
import styled from "styled-components";
import search from "../../assets/Vector.svg";

const SearchContainer = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  width: 80%;
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 15px;
  left: 10px;
`;

const SearchBox = styled.input`
  padding: 16px;
  background: #f2f4f5;
  border-radius: 8px;
  border: none;
  width: 100%;
  text-indent: 20px;
  outline: none;
`;

export default function SearchInput({ handleChange, searchValue }: any) {
  return (
    <SearchContainer>
      <SearchIcon>
        <img src={search} alt="icon" />
      </SearchIcon>
      <SearchBox type="text" onChange={handleChange} value={searchValue} />
    </SearchContainer>
  );
}
