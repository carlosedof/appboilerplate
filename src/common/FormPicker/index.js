import React from 'react';
import { useFormikContext } from 'formik';
import Picker from '../Picker';
import InputText from '../InputText';

const FormPicker = ({ label, name, value, placeholder, required, list, disabled }) => {
  const { setFieldValue, getFieldMeta } = useFormikContext();
  const { error, touched } = getFieldMeta(name);

  const onChange = (newValue) => {
    if (!disabled) {
      setFieldValue(name, newValue);
    }
  };

  return (
    <Picker
      placeholder={placeholder}
      list={list}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error={error && touched}
      required={required}
    />
  );
};

export default FormPicker;
