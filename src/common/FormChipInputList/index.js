import React from 'react';
import { useFormikContext } from 'formik';
import ChipInputList from '../ChipInputList';

const FormChipInputList = ({ label, name, value, suggestions, lazyFind }) => {
  const { setFieldValue } = useFormikContext();

  const onChange = (newValue) => {
    setFieldValue(name, newValue);
  };

  const handleValueChanged = (newValue) => {
    if (lazyFind) {
      lazyFind(newValue);
    }
  };

  return (
    <ChipInputList
      suggestions={suggestions}
      value={value}
      label={label}
      onChange={onChange}
      lazyChange={handleValueChanged}
    />
  );
};

export default FormChipInputList;
