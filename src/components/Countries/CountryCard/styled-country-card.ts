import styled from 'styled-components';

export const SCountryCardWrapper = styled.article`
  border-radius: var(--radius);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

export const SCardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

export const SCardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

export const SCardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

export const SCardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`;

export const SCardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);
  }
`;