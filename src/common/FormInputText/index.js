import React from 'react';
import { useFormikContext } from 'formik';
import InputText from '../InputText';

const FormInputText = ({
  label,
  name,
  value,
  type,
  onChange: onChangeParam,
  required,
  showSpinner,
  button,
  icon,
  iconColor,
  disabled,
}) => {
  const { setFieldValue, getFieldMeta } = useFormikContext();
  const { error, touched } = getFieldMeta(name);

  const onChange = (newValue) => {
    if (!disabled) {
      if (onChangeParam) {
        onChangeParam(newValue);
      } else {
        setFieldValue(name, newValue);
      }
    }
  };

  return (
    <>
      <InputText
        label={label}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        error={error && touched}
        required={required}
        showSpinner={showSpinner}
        button={button}
        icon={icon}
        iconColor={iconColor}
      />
    </>
  );
};

export default FormInputText;
