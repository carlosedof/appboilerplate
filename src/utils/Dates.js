import Moment from 'moment';

const removeMaskStrDate = (dateStr) => String(dateStr).replace(/\D/g, '');

const transformDateToMonthDay = (date) => {
  return Moment(date).format('L');
};

const transformDateToTimeHour = (date) => {
  return Moment(date).format('LT');
};

const transformDateToISO = (date) => {
  const aux = removeMaskDATE(date);
  return new Date(aux).toISOString();
};

const transformDateToMonthYear = (date) => {
  return Moment(date).format('MM/YYYY');
};

const transformDateToFullMonthYear = (date) => {
  return Moment(date).format('MMMM/YYYY');
};

const transformDateToDayMonthYear = (date) => {
  return Moment(date).format('DD/MM/YYYY');
};

const transformDateToFullDate = (date) => {
  return Moment(date).format('LLL');
};

const transformDateToStringYYYYMMDD = (date) => {
  return Moment(date).format('YYYYMMDD');
};

const transformDateToStringYYYYMMDDTrace = (date) => {
  return Moment(date).format('YYYY-MM-DD');
};

const transformStrYYYYMMDDtoFormatedDate = (date) => {
  return Moment(date, 'YYYYMMDD').format('DD/MM/YYYY');
};

const transformStrDDMMYYYYtoYYYYMMDD = (date) => {
  return Moment(date, 'DDMMYYYY').format('YYYYMMDD');
};

const transformDateTimeline = (date) => {
  return Moment(date).format('DD.MM.YYYY [às] HH:mm');
};

const transformNumericDatetoDate = (numericDate) => {
  const year = `${numericDate}`.substring(0, 4);
  const month = `${numericDate}`.substring(4, 6);
  const day = `${numericDate}`.substring(6, 8);
  return new Date(year, month, day);
};

const invertStringDate = (date) => {
  const year = `${date}`.substring(4, 8);
  const month = `${date}`.substring(2, 4);
  const day = `${date}`.substring(0, 2);
  return `${year}${month}${day}`;
};

const invertStringDateTrace = (date) => {
  const year = `${date}`.substring(4, 8);
  const month = `${date}`.substring(2, 4);
  const day = `${date}`.substring(0, 2);
  return `${year}-${month}-${day}`;
};

const invertStringYearMonthDay = (date) => {
  const data = date.split('-');
  const day = data[2];
  const month = data[1];
  const year = data[0];
  return `${day}${month}${year}`;
};

const invertStringDateMonthYear = (date) => {
  const year = `${date}`.substring(2, 6);
  const month = `${date}`.substring(0, 2);
  return `${year}${month}`;
};

const returnCreatedDate = (
  date,
  hoursArray,
  aditionalYear,
  aditionalMonth,
  aditionalDate,
) => {
  const newDate = date ? new Date(date) : new Date();
  if (aditionalDate) {
    newDate.setDate(newDate.getDate() + aditionalDate);
  }
  if (aditionalMonth) {
    newDate.setMonth(newDate.getMonth() + aditionalMonth);
  }
  if (aditionalYear) {
    newDate.setFullYear(newDate.getFullYear() + aditionalYear);
  }
  newDate.setHours(hoursArray[0], hoursArray[1], hoursArray[2], hoursArray[3]);
  return newDate;
};

const createDate = (
  date,
  hoursArray,
  aditionalYear,
  aditionalMonth,
  aditionalDate,
) => {
  if (date) {
    if (date.length === 8) {
      const splits = [
        Number(date.substring(0, 2)),
        Number(date.substring(2, 4)),
        Number(date.substring(4)),
      ];
      const newDate = new Date(splits[2], splits[1] - 1, splits[0]);
      return returnCreatedDate(
        newDate,
        hoursArray,
        aditionalYear,
        aditionalMonth,
        aditionalDate,
      );
    }
    return returnCreatedDate(
      date,
      hoursArray,
      aditionalYear,
      aditionalMonth,
      aditionalDate,
    );
  }
  return returnCreatedDate(
    new Date(),
    hoursArray,
    aditionalYear,
    aditionalMonth,
    aditionalDate,
  );
};

const createStartDate = (
  date,
  aditionalYear,
  aditionalMonth,
  aditionalDate,
) => {
  return createDate(
    date,
    [0, 0, 0, 0],
    aditionalYear,
    aditionalMonth,
    aditionalDate,
  );
};

const createEndDate = (date, aditionalYear, aditionalMonth, aditionalDate) => {
  return createDate(
    date,
    [23, 59, 59, 999],
    aditionalYear,
    aditionalMonth,
    aditionalDate,
  );
};

const convertMMYYYYToMMYY = (date) => {
  if (!date) {
    return '';
  }
  const splits = [Number(date.substring(0, 2)), Number(date.substring(4))];
  return `${splits[0]}${splits[1]}`;
};

export default {
  transformDateToMonthDay,
  transformDateToTimeHour,
  transformDateToFullDate,
  transformDateToMonthYear,
  transformDateToFullMonthYear,
  transformDateToDayMonthYear,
  transformDateToStringYYYYMMDD,
  transformStrYYYYMMDDtoFormatedDate,
  transformNumericDatetoDate,
  transformDateToISO,
  createStartDate,
  createEndDate,
  removeMaskStrDate,
  invertStringDate,
  invertStringDateMonthYear,
  convertMMYYYYToMMYY,
  transformStrDDMMYYYYtoYYYYMMDD,
  transformDateToStringYYYYMMDDTrace,
  invertStringDateTrace,
  invertStringYearMonthDay,
  transformDateTimeline,
};
