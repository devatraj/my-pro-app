import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  margin-bottom: 32px;
  padding: 12px 16px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1rem;
  background: #fafafa;
  transition: border 0.2s;
  &:focus {
    border: 1.5px solid #1976d2;
    outline: none;
    background: #fff;
  }
`;

const SearchBar = ({ searchTerm, setSearchTerm }) => (
    <Input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
    />
);

export default SearchBar;