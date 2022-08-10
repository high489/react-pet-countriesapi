import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Controls } from '../components/Controls';
import { CountriesList } from '../components/Countries/CountriesList';
import { CountryCard } from '../components/Countries/CountryCard';
import { ICountry, ICountryInfo } from '../models/countries';

interface HomeViewProps {
  countries: ICountry[];
  areCountriesLoading: boolean;
  countriesLoadingError: string | null;
}

const HomeView: FC<HomeViewProps> = ({
  countries,
  areCountriesLoading,
  countriesLoadingError
}) => {
  
  const navigate = useNavigate()

  console.log(countries)

  return (
    <>
     <Controls />
     <CountriesList>
      {areCountriesLoading && <section>Countries are loading...</section>}
      {countriesLoadingError && <section>Countries loading error</section>}
      {countries.map((c) => {
        const countryInfo: ICountryInfo = {
          img: c.flags.png,
          name: c.name,
          info: [
            {
              title: 'Population',
              description: c.population.toLocaleString(),
            },
            {
              title: 'Region',
              description: c.region,
            },
            {
              title: 'Capital',
              description: c.capital,
            },
          ],
        }
        return (
          <CountryCard
            key={c.name}
            {...countryInfo}
            onClick={() => navigate(`/country/${c.name}`)}
          />
        )
      })}
     </CountriesList>
    </>
  );
};

export default HomeView;