import React, { FC } from 'react';
import { SListWrapper } from './styled-countries-list';

interface CountriesListProps {
  children: React.ReactNode;
}

const CountriesList: FC<CountriesListProps> = ({children}) => {
  return (
    <SListWrapper>
      {children}
    </SListWrapper>
  );
};

export { CountriesList };