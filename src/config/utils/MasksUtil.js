const DECIMAL_SEPARATOR = '.';
const GROUP_SEPARATOR = ',';
let maskedId;

const maskDDD = ['(', /[1-9]/, /[1-9]/, ')'];

export const maskTime = function (userInput) {
  const hora = userInput;
  if (hora.startsWith('2')) {
    return [/[2]/, /[0-3]/, ':', /[0-5]/, /\d/];
  }
  return [/[0-1]/, /\d/, ':', /[0-5]/, /\d/];
};

export const formatPIS = (valString) => {
  if (!valString) {
    return '';
  }
  const val = valString.toString();
  const parts = unFormat(val).split(DECIMAL_SEPARATOR);
  const teste = parts[0].substring(0, 14);
  parts[0] = teste;
  maskedId = pis(parts[0]);
  return maskedId;
};

export const formatCnpj = (valString) => {
  if (!valString) {
    return '';
  }
  const val = valString.toString();
  const parts = unFormat(val).split(DECIMAL_SEPARATOR);
  const teste = parts[0].substring(0, 14);
  parts[0] = teste;
  maskedId = cnpj(parts[0]);
  return maskedId;
};

export const formatCpf = (valString) => {
  if (!valString) {
    return '';
  }
  const val = valString.toString();
  const parts = unFormat(val).split(DECIMAL_SEPARATOR);
  const teste = parts[0].substring(0, 11);
  parts[0] = teste;
  maskedId = cpfMask(parts[0]);
  return maskedId;
};

export const formatDate = (valString) => {
  if (!valString) {
    return '';
  }
  const val = valString.toString();
  const parts = unFormat(val).split(DECIMAL_SEPARATOR);
  if (parts[0].length > 8) {
    const teste = parts[0].substring(0, 8);
    parts[0] = teste;
  }
  maskedId = dateMask(parts[0]);
  return maskedId;
};

export const formatCep = (valString) => {
  if (!valString) {
    return '';
  }
  const val = valString.toString();
  const parts = unFormat(val).split(DECIMAL_SEPARATOR);
  if (parts[0].length > 8) {
    const teste = parts[0].substring(0, 8);
    parts[0] = teste;
  }
  maskedId = cepMask(parts[0]);
  return maskedId;
};

export const formatCpfCnpj = (valString) => {
  if (!valString) {
    return '';
  }
  const val = valString.toString();
  const parts = unFormat(val).split(DECIMAL_SEPARATOR);
  if (parts[0].length > 11) {
    parts[0] = parts[0].substring(0, 14);
    maskedId = cnpj(parts[0]);
  } else {
    parts[0] = parts[0].substring(0, 11);
    maskedId = cpfMask(parts[0]);
  }
  return maskedId;
};

export const formatCel = (valString) => {
  if (!valString) {
    return '';
  }
  const val = valString.toString();
  const parts = unFormat(val).split(DECIMAL_SEPARATOR);
  if (parts[0].length > 11) {
    parts[0] = parts[0].substring(0, 11);
  }
  if (parts[0].length < 11) {
    maskedId = residencialMask(parts[0]);
  } else {
    maskedId = celularMask(parts[0]);
  }
  return maskedId;
};

export const formatResidencial = (valString) => {
  if (!valString) {
    return '';
  }
  const val = valString.toString();
  const parts = unFormat(val).split(DECIMAL_SEPARATOR);
  if (parts[0].length > 8) {
    parts[0] = parts[0].substring(0, 8);
  }
  maskedId = residencialMask(parts[0]);
  return maskedId;
};

export const formatResidencialWithDD = (valString) => {
  if (!valString) {
    return '';
  }
  const val = valString.toString();
  const parts = unFormat(val).split(DECIMAL_SEPARATOR);
  if (parts[0].length > 10) {
    parts[0] = parts[0].substring(0, 10);
  }
  maskedId = residencialMask(parts[0]);
  return maskedId;
};

export const formatarDDD = (valString) => {
  if (!valString) {
    return '';
  }
  const val = valString.toString();
  const parts = unFormat(val).split(DECIMAL_SEPARATOR);
  parts[0] = parts[0].substring(0, 2);
  maskedId = formatDdd(parts[0]);
  return maskedId;
};

export const formatCns = (valString) => {
  if (!valString) {
    return '';
  }
  const val = valString.toString();
  const parts = unFormat(val).split(DECIMAL_SEPARATOR);
  parts[0] = parts[0].substring(0, 15);
  maskedId = cnsMask(parts[0]);
  return maskedId;
};

export const unFormat = (val) => {
  if (!val) {
    return '';
  }
  val = val.replace(/\D/g, '');

  if (GROUP_SEPARATOR === ',') {
    return val.replace(/,/g, '');
  }
  return val.replace(/\./g, '');
};

export const cpfMask = (v) => {
  v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
  v = v.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
  v = v.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o sexo e o setimo dígitos
  v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca um hífen entre o terceiro e o quarto dígitos
  return v;
};

export const pis = (v) => {
  v = v.replace(/\D/g, '');
  v = v.replace(/(\d{3})(\d)/, '$1.$2');
  v = v.replace(/^(\d{3})\.(\d{5})(\d)/, '$1.$2.$3'); // Coloca ponto entre o quinto e o sexto dígitos
  v = v.replace(/^(\d{3})\.(\d{5})\.(\d{2})(\d)/, '$1.$2.$3-$4'); // Coloca ponto entre o quinto e o sexto dígitos
  return v;
};

export const cnpj = (v) => {
  v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/, '$1.$2'); // Coloca ponto entre o segundo e o terceiro dígitos
  v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3'); // Coloca ponto entre o quinto e o sexto dígitos
  v = v.replace(/\.(\d{3})(\d)/, '.$1/$2'); // Coloca uma barra entre o oitavo e o nono dígitos
  v = v.replace(/(\d{4})(\d)/, '$1-$2'); // Coloca um hífen depois do bloco de quatro dígitos
  return v;
};

export const cepMask = (v) => {
  v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
  v = v.replace(/(\d{5})(\d)/, '$1-$2'); // Coloca um hífen depois do bloco de quatro dígitos
  return v;
};

export const celularMask = (v) => {
  v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
  v = v.replace(/(\d{2})(\d)/, '$1 $2'); // Coloca espaço entre o primeiro e o segundo digito
  v = v.replace(/(\d{5})(\d)/, '$1-$2'); // Coloca hífen entre o quinto e o sexto digito
  return v;
};

export const residencialMask = (v) => {
  v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
  v = v.replace(/(\d{2})(\d)/, '$1 $2'); // Coloca espaço entre o primeiro e o segundo digito
  v = v.replace(/(\d{4})(\d)/, '$1-$2'); // Coloca hífen entre o quarto e o quinto digito
  return v;
};

export const cnsMask = (v) => {
  v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
  v = v.replace(/^[0]/, ''); // Remove digito se o primeiro for 0
  v = v.replace(/^((?!(0))[0-9]{15})$/g, '$1');
  return v;
};

export const formatDdd = (v) => {
  v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
  v = v.replace(/^(\d\d)/g, '($1)'); // Coloca parênteses em volta dos dois primeiros dígitos
  return v;
};

export const dateMask = (v) => {
  v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
  v = v.replace(/(\d{2})(\d)/, '$1/$2'); // Coloca hífen entre o segundo e o terceiro digito
  v = v.replace(/(\d{2})(\d)/, '$1/$2'); // Coloca hífen entre o quarto e o quinto digito
  return v;
};
