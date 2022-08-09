import React, { FC } from 'react';
import { SContainer } from '../container/SContainer';
import { SMainWrapper } from './styled-main';

interface MainProps {
  children: any;
}

const Main: FC<MainProps> = ({children}) => {
  return (
    <SMainWrapper>
      <SContainer>
        {children}
      </SContainer>
    </SMainWrapper>
  );
};

export { Main };