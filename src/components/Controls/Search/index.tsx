import React, { FC } from 'react';

import { IoSearch } from 'react-icons/io5'
import { SInputContainer, SSearchInput } from './styled-search';

interface SearchProps {
  search: string;
  setSearch: (value: string) => void;
}

const Search: FC<SearchProps> = ({search, setSearch}) => {
  return (
    <SInputContainer>
      <IoSearch />
      <SSearchInput
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
          setSearch(e.target.value)}
      />
    </SInputContainer>
  );
};

export { Search };