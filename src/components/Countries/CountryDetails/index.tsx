import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchNeighboursByCodes } from '../../../store/reducers/countryDetails/action-creators';
import { selectCountryNeighbours } from '../../../store/selectors';
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
import { Loader } from '../../UI/Loader';
import { ICountry } from '../../../models';

interface CountryDetailsProps extends ICountry {
  isCountryLoading?: boolean;
  countryError?: string | null | undefined;
  navigate: (value: string) => void;
}

const CountryDetails: FC<CountryDetailsProps> = ({
  name,
  flags,
  capital,
  population,
  region,
  subregion,
  tld,
  currencies,
  languages,
  borders = [],
  navigate,
}) => {
  const dispatch = useAppDispatch()
  
  const {
    neighbours,
    areNeighboursLoading,
    neighboursError,
  } = useAppSelector(selectCountryNeighbours)
  const [neighboursNames, setNeighboursNames] = useState([] as string[])
  const [nativeNamesCommon, setNativeNamesCommon] = useState([] as string[])
  const [currenciesNames, setCurrenciesNames] = useState([] as string[])
  const [languagesNames, setLanguagesNames] = useState([] as string[])

  useEffect(() => {
    if (!areNeighboursLoading && !neighboursError) {
      dispatch(fetchNeighboursByCodes(borders))
    }
    // eslint-disable-next-line
  }, [dispatch, borders])

  useEffect(() => {
    if (neighbours.length !== 0) {
      setNeighboursNames(neighbours.map(n => n.name.common))
    }    
  }, [neighbours])

  useEffect(() => {
    const native = [];
    for (const key in name.nativeName) {
      native.push(name.nativeName[key].common)
    }
    setNativeNamesCommon(native)
  }, [name.nativeName])

  useEffect(() => {
    const curr = [];
    for (const key in currencies) {
      curr.push(currencies[key as keyof typeof currencies]?.name);
    }
    setCurrenciesNames(curr as string[])
  }, [currencies])

  useEffect(() => {
    const lang = [];
    for (const key in languages) {
      lang.push(languages[key]);
    }
    setLanguagesNames(lang);
    
  }, [languages])
  
  return (
    <SDetailsWrapper>
      <SImage src={flags.svg} alt={name.common} />
      <div>
        <STitle>{name.official}</STitle>
        <SListGroup>
          <SList>
            <SListItem>
              <b>Native Name:</b> {nativeNamesCommon.length !== 0 ? nativeNamesCommon.join(', ') : 'no native name'}
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
              <b>Top Level Domain:</b> {tld?.map(d => (<span key={d}>{d}</span>))}
            </SListItem>
            <SListItem>
              <b>Currency:</b> {currenciesNames.length !== 0 ? currenciesNames.join(', ') : 'no currencies'}
            </SListItem>
            <SListItem>
              <b>Languages:</b> {languagesNames.length !== 0 ? languagesNames.join(', ') : 'no languages'}
            </SListItem>
          </SList>
        </SListGroup>
        <SMeta>
          <b>Border Countries</b>
          {(areNeighboursLoading || neighbours.length !== neighboursNames.length)
          ? <Loader />
          : neighboursError
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

export {CountryDetails};