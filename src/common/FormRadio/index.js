import React from 'react';
import { useFormikContext } from 'formik';
import Radio from '../Radio';

const FormRadio = ({ name, question, trueLabel, falseLabel, value, required, disabled }) => {
  const { setFieldValue } = useFormikContext();

  const onChange = (newValue) => {
    if (!disabled) {
      setFieldValue(name, newValue);
    }
  };

  return (
    <Radio
      value={value}
      question={question}
      trueLabel={trueLabel}
      falseLabel={falseLabel}
      onChange={onChange}
      required={required}
    />
  );
};

export default FormRadio;
