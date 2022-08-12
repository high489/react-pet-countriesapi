import React, { FC, useEffect, useState } from 'react';
import { ICountry } from '../../../models/countries';
import { 
  SDetailsWrapper, 
  SImage, 
  SList, 
  SListGroup, 
  SListItem, 
  SMeta, 
  STag, 
  STagGroup, 
  STitle } from './styled-country-details';

interface CountryDetailsProps extends ICountry {
  neighbours: ICountry[];
  areNeighboursLoading: boolean;
  neighboursLoadingError: string | null;
  navigate: (value: string) => void;
}

const CountryDetails: FC<CountryDetailsProps> = ({
  name,
  nativeName,
  flag,
  capital,
  population,
  region,
  subregion,
  topLevelDomain,
  currencies = [],
  languages = [],
  borders = [],
  neighbours,
  areNeighboursLoading,
  neighboursLoadingError,
  navigate,
}) => {
  const [neighboursNames, setNeighboursNames] = useState([] as string[])

  useEffect(() => {
    if(neighbours.length !== 0) {
      setNeighboursNames(neighbours.map(n => n.name))
    }
  }, [neighbours])

  return (
    <SDetailsWrapper>
      <SImage src={flag} alt={name} />
      <div>
        <STitle>{name}</STitle>
        <SListGroup>
          <SList>
            <SListItem>
              <b>Native Name:</b> {nativeName}
            </SListItem>
            <SListItem>
              <b>Population:</b> {population}
            </SListItem>
            <SListItem>
              <b>Region:</b> {region}
            </SListItem>
            <SListItem>
              <b>Sub Region:</b> {subregion}
            </SListItem>
            <SListItem>
              <b>Capital:</b> {capital}
            </SListItem>
          </SList>
          <SList>
            <SListItem>
              <b>Top Level Domain:</b> {topLevelDomain?.map(d => (<span key={d}>{d}</span>))}
            </SListItem>
            <SListItem>
              <b>Currency:</b> {currencies?.map(c => (<span key={c.code}>{c.name} </span>))}
            </SListItem>
            <SListItem>
              <b>Languages:</b> {languages?.map(l => (<span key={l.name}>{l.name}</span>))}
            </SListItem>
          </SList>
        </SListGroup>
        <SMeta>
          <b>Border Countries</b>
          {areNeighboursLoading 
          ? <span>Border countries are loading...</span>
          : !borders.length
            ? <span>There is no border countries</span>
            : <STagGroup>
                {neighboursNames.map((n) => (
                  <STag key={n} onClick={() => navigate(`/country/${n}`)}>{n}</STag>
                ))}
              </STagGroup>
          }
        </SMeta>
      </div>
    </SDetailsWrapper>
  );
};

export default CountryDetails;