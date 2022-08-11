import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchCountriesByCodes } from '../../../store/reducers/countriesByCodes/actionCreators';
import { ICountry } from '../../../models/countries';
import { SDetailsWrapper, SImage, SList, SListGroup, SListItem, SMeta, STag, STagGroup, STitle } from './styled-country-details';

interface CountryDetailsProps extends ICountry {
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
  navigate,
}) => {
  const dispatch = useAppDispatch()
  const [neighbours, setNeighbours] = useState([] as string[])

  const {data, loading} = useAppSelector(state => state.countriesByCodes)

  useEffect(() => {
    dispatch(fetchCountriesByCodes(borders))
    if (!loading)
      setNeighbours(data.map(c => c.name))
  }, [dispatch, borders])

  console.log(neighbours);
  

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
          {!borders.length
          ? <span>There is no border countries</span>
          : <STagGroup>
              {neighbours.map((n) => (
                <STag key={n} onClick={() => navigate(`/country/${n}`)}>{n}</STag>
              ))}
            </STagGroup>}
        </SMeta>
      </div>
    </SDetailsWrapper>
  );
};

export default CountryDetails;