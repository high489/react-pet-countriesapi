import styled from 'styled-components';
import Select from 'react-select';

export const StyledSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'var(--colors-ui-base)',
      color: 'var(--colors-text)',
      borderRadius: 'var(--radius)',
      padding: '0.25rem',
      border: 'none',
      boxShadow: 'var(--shadow)',
      height: '50px',
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: 'var(--colors-text)',
      backgroundColor: 'var(--colors-ui-base)',
    })
  }
})`
  width: 200px;
  border-radius: var(--radius);
  font-family: var(--family);
  border: none;

  & input {
    padding-left: 0.25rem;
  }
  //shadow for dropped list
  & > * {
    box-shadow: var(--shadow);
  }
  //text color for nested elements
  & * {
    color: var(--colors-text) !important;
  }
  & > div[id] {
    background-color: var(--colors-ui-base);
  }
`;