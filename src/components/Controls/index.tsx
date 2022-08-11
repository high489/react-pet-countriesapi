import React, { FC, useEffect, useState } from 'react';
import { Search } from './Search';
import { RegionSelect, ISelectOption } from './RegionSelect';
import { SControlsWrapper } from './styled-controls';

const options: ISelectOption[] = [
  {value: 'Africa', label: 'Africa'},
  {value: 'America', label: 'America'},
  {value: 'Asia', label: 'Asia'},
  {value: 'Europe', label: 'Europe'},
  {value: 'Oceania', label: 'Oceania'},
]

interface ControlsProps {
  onSearch: (search?: string | undefined, region?: any) => void;
}

const Controls: FC<ControlsProps> = ({onSearch}) => {
  const [search, setSearch] = useState<string>('')
  const [region, setRegion] = useState<unknown>()

  useEffect(() => {
    onSearch(search, region)
    // eslint-disable-next-line
  }, [search, region])
  
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