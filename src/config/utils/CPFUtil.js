import { unFormat } from './MasksUtil';

export function validateCPF(cpf) {
  const cpfUnformat = unFormat(cpf);
  if (cpf) {
    if (cpfUnformat && cpfUnformat.length > 0) {
      if (cpfUnformat.length === 11) {
        const cpfFormat = unFormat(cpf);

        // Elimina CPFs invalidos conhecidos

        if (
          cpfFormat === '00000000000' ||
          cpfFormat === '11111111111' ||
          cpfFormat === '22222222222' ||
          cpfFormat === '33333333333' ||
          cpfFormat === '44444444444' ||
          cpfFormat === '55555555555' ||
          cpfFormat === '66666666666' ||
          cpfFormat === '77777777777' ||
          cpfFormat === '88888888888' ||
          cpfFormat === '99999999999'
        ) {
          return false;
        }

        // Valida 1o digito
        let add = 0;
        for (let i = 0; i < 9; i++) {
          add += parseInt(cpfFormat.charAt(i), 10) * (10 - i);
        }
        let rev = 11 - (add % 11);
        if (rev === 10 || rev === 11) {
          rev = 0;
        }
        if (rev !== parseInt(cpfFormat.charAt(9), 10)) {
          return false;
        }

        // Valida 2o digito
        add = 0;
        for (let i = 0; i < 10; i++) {
          add += parseInt(cpfFormat.charAt(i), 10) * (11 - i);
        }
        rev = 11 - (add % 11);
        if (rev === 10 || rev === 11) {
          rev = 0;
        }
        return rev === parseInt(cpfFormat.charAt(10), 10);
      }
    }
  }
  return false;
}
