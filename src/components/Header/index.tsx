import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectTheme } from '../../store/selectors';
import { switchTheme } from '../../store/reducers/theme';

import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { SContainer } from '../container/SContainer'
import { SHeader, SHeaderWrapper, STitle, SThemeSwitcher } from './styled-header';
import { resetControlsState } from '../../store/reducers/controls';

const Header: FC = () => {
  const dispatch = useAppDispatch()
  const { themeType } = useAppSelector(selectTheme)

  useEffect(() => {
    document.body.setAttribute('data-theme', themeType)
  }, [themeType])

  const handleResetControlsState = () => {
    dispatch(resetControlsState())
  }

  const toggleTheme = () => {
    dispatch(switchTheme())
  }

  return (
    <SHeader>
      <SContainer>
        <SHeaderWrapper>
          <STitle onClick={handleResetControlsState}>Where in the world?</STitle>
          <SThemeSwitcher onClick={toggleTheme}>
            {themeType === 'light'
            ? <IoMoonOutline size='14px'/>
            : <IoMoon size='14px'/>
            }{' '}
            <span style={{marginLeft: '0.75rem'}}>{themeType} Theme</span>
          </SThemeSwitcher>
        </SHeaderWrapper>
      </SContainer>
    </SHeader>
  );
};

export { Header };