import React, { FC } from 'react';
import { SCountriesListWrapper } from './styled-countries-list';

interface CountriesListProps {
  children: React.ReactNode;
}

const CountriesList: FC<CountriesListProps> = ({children}) => {
  return (
    <SCountriesListWrapper>
      {children}
    </SCountriesListWrapper>
  );
};

export { CountriesList };