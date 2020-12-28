import React from 'react';
import { useFormikContext } from 'formik';
import InputDATE from '../InputDate';

const FormInputDate = ({
  value,
  minDate,
  maxDate,
  required,
  editable = true,
  label,
  name,
  disabled,
}) => {
  const { setFieldValue, getFieldMeta } = useFormikContext();
  const { error, touched } = getFieldMeta(name);

  const onChange = (newValue, isValid) => {
    if (!disabled) {
      setFieldValue(name, newValue);
    }
  };

  return (
    <InputDATE
      label={label}
      minDate={minDate}
      value={value}
      onChange={onChange}
      maxDate={maxDate}
      required={required}
      editable={editable}
      error={error && touched}
    />
  );
};

export default FormInputDate;
