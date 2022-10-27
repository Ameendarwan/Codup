import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import search from "../../assets/Vector.svg";
import cross from "../../assets/cross.svg";

const SearchContainer = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 18px;
  left: 15px;
`;

const CrossIcon = styled.img`
  position: absolute;
  top: 20px;
  right: 15px;
  cursor: pointer;
`;

const SearchBox = styled.input`
  padding: 16px;
  background: #f2f4f5;
  border-radius: 8px;
  border: none;
  width: 100%;
  text-indent: 20px;
  outline: none;
  border: 2px solid transparent;
  &:focus {
    border: 2px solid #9990ff;
    background: #ffffff;
  }
`;

interface SearchProps {
  handleChange: ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  setFocus: Dispatch<SetStateAction<boolean>>;
  setSearchValue: Dispatch<SetStateAction<string>>;
  focus: boolean;
}

export default function SearchInput({
  handleChange,
  searchValue,
  setFocus,
  focus,
  setSearchValue,
}: SearchProps) {
  return (
    <SearchContainer>
      <SearchIcon src={search} alt="search" />
      {focus && searchValue && (
        <CrossIcon src={cross} alt="cross" onClick={() => setSearchValue("")} />
      )}
      <SearchBox
        type="text"
        onChange={handleChange}
        value={searchValue}
        onFocus={() => setFocus(true)}
      />
    </SearchContainer>
  );
}
