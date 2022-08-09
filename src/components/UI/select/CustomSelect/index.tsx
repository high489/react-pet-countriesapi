import React, { FC, FocusEventHandler } from 'react';
import {
  ActionMeta,
  MultiValue,
  SingleValue,
} from "react-select";
import { StyledSelect } from './styled-custom-select';

export interface ISelectOption {
  value: string;
  label: string;
}

interface ISelectProps {
  isMulti?: boolean;
  placeholder: string;
  isClearable: boolean;
  isSearchable: boolean;
  options: ISelectOption[];
  value: SingleValue<unknown> | MultiValue<unknown>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onChange?: (
    value: unknown | readonly unknown[],
    action: ActionMeta<unknown>
  ) => void;
}

const CustomSelect: FC<ISelectProps> = ({
  isMulti,
  placeholder,
  isClearable,
  isSearchable,
  options,
  value,
  onBlur,
  onFocus,
  onChange,
}) => {
  return (
    <StyledSelect 
      isMulti={isMulti}
      placeholder={placeholder}
      isClearable={isClearable}
      isSearchable={isSearchable}
      options={options}
      value={value}
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={onChange}
    />
  );
};

export { CustomSelect };