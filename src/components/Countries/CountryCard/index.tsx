import React, { FC } from 'react';
import { ICountryInfo } from '../../../models/countries';
import { SCardBody, SCardImage, SCardList, SCardListItem, SCardTitle, SCountryCardWrapper } from './styled-country-card';

interface CountryCardProps extends ICountryInfo {
  onClick: () => void;
}

const CountryCard: FC<CountryCardProps> = ({img, name, info = [], onClick}) => {

  return (
    <SCountryCardWrapper onClick={onClick}>
      <SCardImage src={img} alt={name}/>
      <SCardBody>
        <SCardTitle>{name}</SCardTitle>
        <SCardList>
          {info.map(el => (
            <SCardListItem key={el.title}>
              <b>{el.title}:</b> {el.description}
            </SCardListItem>
          ))}
        </SCardList>
      </SCardBody>
    </SCountryCardWrapper>
  );
};

export { CountryCard };