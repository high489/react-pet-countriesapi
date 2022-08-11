import React, { FC } from 'react';
import { SButton } from './styled-my-button';

interface MyButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const MyButton: FC<MyButtonProps> = ({onClick, children}) => {
  return (
    <SButton onClick={onClick}>
      {children}
    </SButton>
  );
};

export {MyButton};