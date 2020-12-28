import Moment from 'moment';

const inputMaskCPF = (value) => {
  if (!value) {
    return value;
  }
  let mask = clearStringOnlyNumbers(value);

  if (mask.length > 11) {
    mask = mask.substring(0, 11);
  }

  if (mask.length <= 11) {
    mask = mask.replace(/(\d{3})(\d)/, '$1.$2');
    mask = mask.replace(/(\d{3})(\d)/, '$1.$2');
    mask = mask.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }
  return mask;
};

const removeMaskCPF = (value) => clearStringOnlyNumbers(value);

const inputMaskCNPJ = (value) => {
  let mask = clearStringOnlyNumbers(value);

  if (mask.length > 14) {
    mask = mask.substring(0, 14);
  }
  if (mask.length <= 14) {
    mask = mask.replace(/(\d{2})(\d)/, '$1.$2');
    mask = mask.replace(/(\d{3})(\d)/, '$1.$2');
    mask = mask.replace(/(\d{3})(\d)/, '$1/$2');
    mask = mask.replace(/(\d{4})(\d{1,2})$/, '$1-$2');
  }
  return mask;
};

const removeMaskCNPJ = (value) => clearStringOnlyNumbers(value);

const inputMaskSSN = (value) => {
  let mask;
  mask = value.replace(/\D/g, '');

  if (mask.length > 9) {
    mask = mask.substring(0, 9);
  }
  if (mask.length <= 9) {
    mask = mask.replace(/(\d{3})(\d)/, '$1-$2');
    mask = mask.replace(/(\d{2})(\d{4})$/, '$1-$2');
  }
  return mask;
};

const removeMaskSSN = (value) => {
  return value.replace(/\D/g, '');
};

const inputMaskEIN = (value) => {
  if (!value) {
    return value;
  }
  let mask;
  mask = value.replace(/\D/g, '');

  if (mask.length > 9) {
    mask = mask.substring(0, 9);
  }

  if (mask.length <= 8) {
    mask = mask.replace(/(\d{1})(\d{7})/, '$1-$2');
  } else if (mask.length <= 9) {
    mask = mask.replace(/(\d{2})(\d{7})$/, '$1-$2');
  }
  return mask;
};

const inputMaskForIssuingAgencyUF = (inputValue) => {
  if (!inputValue) {
    return '';
  }

  let mask = inputValue.replace(/[^A-Za-z]/g, '');

  if (mask.length > 5) {
    mask = mask.substring(0, 5);
  }
  mask = mask.replace(/(\w{3})(\w{2})/, '$1/$2');

  return mask;
};

const removeMaskEIN = (value) => value.replace(/\D/g, '');

const inputMaskTEL = (value) => {
  if (!value) {
    return value;
  }
  let mask = clearStringOnlyNumbers(value);

  if (mask.length > 10) {
    mask = mask.substring(0, 10);
  }

  if (mask.length <= 8) {
    mask = mask.replace(/(\d{4})(\d)/, '$1-$2');
  } else if (mask.length <= 9) {
    mask = mask.replace(/(\d{1})(\d)/, '$1 $2');
    mask = mask.replace(/(\d{4})(\d{4})$/, '$1-$2');
  } else if (mask.length <= 10) {
    mask = mask.replace(/(\d{6})(\d)/, '$1 $2');
    mask = mask.replace(/(\d{4})(\d)/, '$1 $2');
  }
  return mask;
};

const inputMaskTELNineNumber = (value) => {
  if (!value) {
    return value;
  }
  let mask = clearStringOnlyNumbers(value);

  if (mask.length > 9) {
    mask = mask.substring(0, 9);
  }

  mask = mask.replace(/(\d{1})(\d)/, '$1 $2');
  mask = mask.replace(/(\d{4})(\d{4})$/, '$1-$2');

  return mask;
};

const inputMaskTextAndNumber = (value) => {
  if (!value) {
    return value;
  }
  const mask = value.replace(
    /[^\.a-zA-Z0-9çÇàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\s]/gi,
    '',
  );

  return mask;
};

const removeMaskTEL = (value) => clearStringOnlyNumbers(value);

const inputMaskDATE = (value) => {
  if (!value) {
    return value;
  }
  let mask = clearStringOnlyNumbers(value);

  if (mask.length > 8) {
    mask = mask.substring(0, 8);
  }

  if (mask.length <= 8) {
    mask = mask.replace(/(\d{2})(\d)/, '$1/$2');
    mask = mask.replace(/(\d{2})(\d{4})$/, '$1/$2');
  }
  return mask;
};

const inputMaskDATEMonthYear = (value) => {
  if (!value) {
    return value;
  }
  let mask = clearStringOnlyNumbers(value);

  if (mask.length > 6) {
    mask = mask.substring(0, 6);
  }

  if (mask.length <= 6) {
    mask = mask.replace(/(\d{2})(\d)/, '$1/$2');
    mask = mask.replace(/(\d{2})(\d{4})$/, '$1/$2');
  }
  return mask;
};

const removeMaskDATE = (value) => {
  const newValue = clearStringOnlyNumbers(value);
  return Moment(newValue, 'DDMMYYYY').format('YYYY-MM-DD');
};

const removeMaskDATEMonthYear = (value) => {
  return value.replace('/', '-');
};

const inputMaskCEP = (value) => {
  if (!value) {
    return value;
  }
  let mask = clearStringOnlyNumbers(value);

  if (mask.length > 8) {
    mask = mask.substring(0, 8);
  }
  if (mask.length === 8) {
    mask = mask.replace(/(\d{5})(\d{3})$/, '$1-$2');
  }
  return mask;
};

const removeMaskCEP = (value) => {
  const clearValue = clearStringOnlyNumbers(value);
  return parseInt(clearValue, 10);
};

const toCamelCase = (textValue) => {
  return textValue
    .split(' ')
    .map((splitText) => {
      return (
        splitText.charAt(0).toUpperCase() + splitText.slice(1).toLowerCase()
      );
    })
    .join(' ');
};

const toUpperCase = (textValue) => {
  const resultText = textValue ? textValue.toUpperCase() : textValue;
  return resultText;
};

const clearStringOnlyNumbers = (value) => String(value).replace(/\D/g, '');

const organizeTransactionsAndConcatValues = (transactions) => {
  const { length } = transactions;

  const transactionGroups = {};
  for (let i = 0; i < length; i += 1) {
    const { valorBRL, grupoDescricaoMCC, grupoMCC, flagCredito } = transactions[
      i
    ];

    const resultValue = flagCredito === 1 ? valorBRL : 0;

    if (grupoMCC === null) {
      if (!transactionGroups[0]) {
        transactionGroups[0] = {
          value: resultValue,
          groupName: 'Outros',
          mcc: 0,
        };
      } else {
        transactionGroups[0].value += resultValue;
      }
    } else if (!transactionGroups[grupoMCC]) {
      transactionGroups[grupoMCC] = {
        value: resultValue,
        groupName: grupoDescricaoMCC,
        mcc: grupoMCC,
      };
    } else {
      transactionGroups[grupoMCC].value += resultValue;
    }
  }

  const transitionGroupArray = Object.values(transactionGroups);
  transitionGroupArray.sort((a, b) => (a.value < b.value ? 1 : -1));
  return transitionGroupArray;
};

const barcodeMask = (value) => {
  const clearValue = clearStringOnlyNumbers(value);

  let newValue = '';
  if (clearValue.charAt(0) === '8') {
    // Tipo Arrecadação
    const part11 = clearValue.substring(0, 11);
    newValue += part11;

    const part12 = clearValue.substring(11, 12);
    newValue += (part12.length > 0 ? ' ' : '') + part12;

    const part21 = clearValue.substring(12, 23);
    newValue += (part21.length > 0 ? '\n' : '') + part21;

    const part22 = clearValue.substring(23, 24);
    newValue += (part22.length > 0 ? ' ' : '') + part22;

    const part31 = clearValue.substring(24, 35);
    newValue += (part31.length > 0 ? '\n' : '') + part31;

    const part32 = clearValue.substring(35, 36);
    newValue += (part32.length > 0 ? ' ' : '') + part32;

    const part41 = clearValue.substring(36, 47);
    newValue += (part41.length > 0 ? '\n' : '') + part41;

    const part42 = clearValue.substring(47, 48);
    newValue += (part42.length > 0 ? ' ' : '') + part42;
  } else {
    // Tipo Boleto
    const part11 = clearValue.substring(0, 5);
    newValue += part11;

    const part12 = clearValue.substring(5, 10);
    newValue += (part12.length > 0 ? '.' : '') + part12;

    const part21 = clearValue.substring(10, 15);
    newValue += (part21.length > 0 ? '\n' : '') + part21;

    const part22 = clearValue.substring(15, 21);
    newValue += (part22.length > 0 ? '.' : '') + part22;

    const part31 = clearValue.substring(21, 26);
    newValue += (part31.length > 0 ? '\n' : '') + part31;

    const part32 = clearValue.substring(26, 32);
    newValue += (part32.length > 0 ? '.' : '') + part32;

    const part41 = clearValue.substring(32, 33);
    newValue += (part41.length > 0 ? '\n' : '') + part41;

    const part51 = clearValue.substring(33, 47);
    newValue += (part51.length > 0 ? '\n' : '') + part51;
  }

  return newValue;
};

const taxMask = (value) => {
  if (value) {
    const stringOnlyNumbers = `${Number(value).toFixed(2)}`.replace(/\D/g, '');
    if (!stringOnlyNumbers) {
      return '0,00%';
    }

    const { length } = stringOnlyNumbers;
    if (length === 1) {
      return value >= 0
        ? `0,0${stringOnlyNumbers}%`
        : `-0,0${stringOnlyNumbers}%`;
    }
    if (length === 2) {
      return value >= 0
        ? `0,${stringOnlyNumbers}%`
        : `-0,${stringOnlyNumbers}%`;
    }
    let taxMaskString = '';

    for (let i = length - 1; i >= 0; i -= 1) {
      if (i === length - 2) {
        taxMaskString = `,${stringOnlyNumbers[i]}${taxMaskString}`;
      } else if (i < length - 5 && (i - length - 3) % 3 === 0) {
        taxMaskString = `${stringOnlyNumbers[i]}.${taxMaskString}`;
      } else {
        taxMaskString = `${stringOnlyNumbers[i]}${taxMaskString}`;
      }
    }

    return value >= 0 ? `${taxMask}%` : `-${taxMask}%`;
  }
  return '0,00%';
};

const convertMoneyTextMask = (value) => {
  if (value) {
    const stringOnlyNumbers = `${Number(value).toFixed(2)}`.replace(/\D/g, '');
    if (!stringOnlyNumbers) {
      return 'R$ 0,00';
    }

    const { length } = stringOnlyNumbers;
    if (length === 1) {
      return value >= 0
        ? `R$ 0,0${stringOnlyNumbers}`
        : `R$ -0,0${stringOnlyNumbers}`;
    }
    if (length === 2) {
      return value >= 0
        ? `R$ 0,${stringOnlyNumbers}`
        : `R$ -0,${stringOnlyNumbers}`;
    }
    let moneyMask = '';

    for (let i = length - 1; i >= 0; i -= 1) {
      if (i === length - 2) {
        moneyMask = `,${stringOnlyNumbers[i]}${moneyMask}`;
      } else if (i < length - 5 && (i - length - 3) % 3 === 0) {
        moneyMask = `${stringOnlyNumbers[i]}.${moneyMask}`;
      } else {
        moneyMask = `${stringOnlyNumbers[i]}${moneyMask}`;
      }
    }

    return value >= 0 ? `R$ ${moneyMask}` : `R$ -${moneyMask}`;
  }
  return 'R$ 0,00';
};

const convertMoneyInputMask = (value) => {
  if (value) {
    let mask = `${value}`.replace(/\D/g, '');

    if (!mask || Number(mask) <= 0) {
      return '';
    }

    const contador = (value.length - 5) / 3;

    mask = mask.replace(/^([.\d]+)(\d{2})$/, '$1,$2');
    for (let i = 0; i < contador; i += 1) {
      mask = mask.replace(/(\d+)(\d{3})([.,\d]+)$/, '$1.$2$3');
    }

    mask = `R$ ${mask}`;
    return mask;
  }

  return value;
};

const removeMoneyMask = (value) => {
  const stringValue = `${value}`.replace(/\D/g, '');
  if (stringValue.length === 1) {
    return parseFloat(`${value < 0 ? '-' : ''}0.0${stringValue}`);
  }
  if (stringValue.length === 2) {
    return parseFloat(`${value < 0 ? '-' : ''}0.${stringValue}`);
  }

  return parseFloat(stringValue.replace(/(\d+)(\d{2})$/, '$1.$2'));
};

const formatBankId = (bankId) => {
  const stringBankId = `${bankId}`;
  const { length } = stringBankId;
  if (length === 1) {
    return `00${bankId}`;
  }
  if (length === 2) {
    return `0${bankId}`;
  }
  return `${bankId}`;
};

const formatCardNumber = (cardNumber) => {
  const stringNumber = `${cardNumber}`;
  const { length } = stringNumber;
  let formatedCardNumber = '';
  for (let i = 0; i < length; i += 1) {
    formatedCardNumber += i % 4 === 0 ? ` ${cardNumber[i]}` : cardNumber[i];
  }

  return formatedCardNumber;
};

const formatCC = (cdCta) => {
  const stringNumber = `${cdCta}`;

  const digitIndex = stringNumber.length - 1;

  const account = stringNumber.substr(0, digitIndex);
  const digit = stringNumber.substr(digitIndex, 1);

  return `${account}-${digit}`;
};

export default {
  inputMaskCPF,
  removeMaskCPF,
  inputMaskCNPJ,
  removeMaskCNPJ,
  inputMaskSSN,
  removeMaskSSN,
  inputMaskEIN,
  removeMaskEIN,
  inputMaskTEL,
  removeMaskTEL,
  inputMaskTELNineNumber,
  inputMaskTextAndNumber,
  inputMaskDATE,
  removeMaskDATE,
  inputMaskDATEMonthYear,
  removeMaskDATEMonthYear,
  inputMaskCEP,
  inputMaskForIssuingAgencyUF,
  removeMaskCEP,
  toCamelCase,
  toUpperCase,
  clearStringOnlyNumbers,
  removeMoneyMask,
  convertMoneyTextMask,
  convertMoneyInputMask,
  taxMask,
  barcodeMask,
  organizeTransactionsAndConcatValues,
  formatBankId,
  formatCardNumber,
  formatCC,
};
