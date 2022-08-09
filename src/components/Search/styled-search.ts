import styled from 'styled-components';

export const SInputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radius);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1.5rem;

@media(min-width: 767px) {
  margin-bottom: 0;
  width: 280px;
}
`

export const SSearchInput = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  background-color: var(--colors-bg);
  color: var(--color-text);
  margin-left: 2rem;
  border: none;
  outline: none;
`