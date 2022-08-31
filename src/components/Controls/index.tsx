import React, { FC } from 'react';

import { Search } from './Search';
import { RegionSelect, ISelectOption } from './RegionSelect';
import { SControlsWrapper } from './styled-controls';

const options: ISelectOption[] = [
  {value: 'Africa', label: 'Africa'},
  {value: 'America', label: 'America'},
  {value: 'Antarctic', label: 'Antarctic'},
  {value: 'Asia', label: 'Asia'},
  {value: 'Europe', label: 'Europe'},
  {value: 'Oceania', label: 'Oceania'},
]

interface ControlsProps {
  search: string;
  region: unknown;
  setSearch: (value: string) => void;
  setRegion: (value: unknown) => void;
}

const Controls: FC<ControlsProps> = ({ search, region, setSearch, setRegion }) => {  
  return (
    <SControlsWrapper>
      <Search search={search} setSearch={setSearch} />
      <RegionSelect
        isMulti={false}
        options={options}
        placeholder='Filter by Region'
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </SControlsWrapper>
  );
};

export { Controls };