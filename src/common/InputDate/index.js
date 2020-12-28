import React, { useEffect, useState } from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import InputText from '../InputText';
import Flex from '../Flex';
import Icon from '../Icon';
import { CalendarIconButton, NonEditable } from './styles';
import { Dates, Filters, Validations } from '../../utils';
import { Colors } from '../../config';

export default ({
  value,
  minDate,
  maxDate,
  required,
  editable = true,
  label,
  error,
  onChange,
  ...rest
}) => {
  const [showPicker, setShowPicker] = useState(false);
  const [dateToShow, setDateToShow] = useState(new Date());

  useEffect(() => {
    const invertedDate = Dates.invertStringYearMonthDay(value);
    setDateToShow(
      Validations.isDATE(invertedDate, minDate, maxDate).isValid
        ? Dates.createStartDate(invertedDate)
        : new Date(),
    );
  }, [value]);

  const setTextChanged = (inputedValue) => {
    if (onChange) {
      const isValid = Validations.isDATE(inputedValue, minDate, maxDate);
      const unMask = Dates.removeMaskStrDate(inputedValue);
      const invertedDate = Dates.invertStringDateTrace(unMask);
      onChange(invertedDate, isValid.isValid);
    }
  };

  const openCalendar = () => {
    setShowPicker(true);
  };

  const setDateFromPicker = (date) => {
    setShowPicker(false);
    const fixedDate = Dates.transformDateToDayMonthYear(date);
    setTextChanged(fixedDate);
  };

  const onCancel = () => {
    setShowPicker(false);
  };

  return (
    <Flex opacity={editable ? 1 : 0.5} dir="column" width={100}>
      <InputText
        {...rest}
        maxLength={10}
        label={label}
        value={Filters.inputMaskDATE(Dates.invertStringYearMonthDay(value))}
        onChange={(newValue) => setTextChanged(newValue)}
        numberValidation={false}
        type="number"
        placeholder="10  / 10 / 2020"
        required={required}
        error={error}
      />
      <CalendarIconButton onPress={openCalendar}>
        <Icon
          color={Colors.mainTheme.gray}
          size={20}
          iconName="calendar"
          source="Feather"
        />
      </CalendarIconButton>
      {!editable && <NonEditable />}
      <DateTimePicker
        date={dateToShow}
        isVisible={showPicker}
        onConfirm={(date) => setDateFromPicker(date)}
        onCancel={onCancel}
        minimumDate={minDate}
        maximumDate={maxDate}
      />
    </Flex>
  );
};
