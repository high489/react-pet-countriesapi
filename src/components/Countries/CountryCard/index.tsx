import React, { FC } from 'react';
import { ICountryInfo } from '../../../models/countries';
import { SBody, SImage, SList, SListItem, STitle, SCardWrapper } from './styled-country-card';

interface CountryCardProps extends ICountryInfo {
  onClick: () => void;
}

const CountryCard: FC<CountryCardProps> = ({img, name, info = [], onClick}) => {

  return (
    <SCardWrapper onClick={onClick}>
      <SImage src={img} alt={name}/>
      <SBody>
        <STitle>{name}</STitle>
        <SList>
          {info.map(el => (
            <SListItem key={el.title}>
              <b>{el.title}:</b> {el.description}
            </SListItem>
          ))}
        </SList>
      </SBody>
    </SCardWrapper>
  );
};

export { CountryCard };