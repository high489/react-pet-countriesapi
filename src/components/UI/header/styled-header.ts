import styled from 'styled-components';

export const SHeader = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`

export const SHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

export const STitle = styled.a.attrs({
  href: '/'
})`
  color: var(--color-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  text-decoration: none;
`

export const SThemeSwitcher = styled.div`
color: var(--color-text);
font-size: var(--fs-sm);
//font-weight: var(--fw-bold);
text-transform: capitalize;
cursor: pointer;
`