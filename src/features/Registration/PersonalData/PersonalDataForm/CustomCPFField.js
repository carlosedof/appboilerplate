import React from 'react';
import { useFormikContext } from 'formik';
import * as _ from 'lodash';
import { FormInputText } from '../../../../common';
import { Colors } from '../../../../config';
import { formatCpf } from '../../../../config/utils/MasksUtil';
import {
  useUserCurrentCpfIsValid,
  useUserIsFetching,
} from '../../../../store/hooks/user';

export default ({ required }) => {
  const { values } = useFormikContext();
  const isFetching = useUserIsFetching();
  const lastCpfIsValid = useUserCurrentCpfIsValid();

  return (
    <FormInputText
      value={formatCpf(values?.cpf || '')}
      label="CPF"
      name="cpf"
      type="cpf"
      required={required}
      showSpinner={isFetching}
      icon={
        !_.isEmpty(values.cpf)
          ? !lastCpfIsValid
            ? 'close-circle'
            : 'check-circle'
          : null
      }
      iconColor={
        !lastCpfIsValid ? Colors.mainTheme.error : Colors.mainTheme.btnPrimary
      }
    />
  );
};
