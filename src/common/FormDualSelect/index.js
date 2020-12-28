import React from 'react';
import { useFormikContext } from 'formik';
import DualSelect from '../DualSelect';

const FormDualSelect = ({ question, name, value, trueLabel, falseLabel, disabled }) => {
  const { setFieldValue, getFieldMeta } = useFormikContext();
  const { error, touched } = getFieldMeta(name);

  const onChange = (newValue) => {
    if (!disabled) {
      setFieldValue(name, newValue);
    }
  };

  return (
    <>
      <DualSelect
        trueLabel={trueLabel}
        falseLabel={falseLabel}
        disabled={disabled}
        question={question}
        name={name}
        value={value}
        onChange={onChange}
        error={error && touched}
      />
    </>
  );
};

export default FormDualSelect;
