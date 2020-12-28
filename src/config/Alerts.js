import { Alert } from 'react-native';

const alertNotImplemented = () => {
  Alert.alert('Alerta', 'Funcionalidade não implementada.');
};

const alertFromMessage = ({ title = 'Alerta', message }) => {
  Alert.alert(title, message);
};

const alertLocationDisable = () => {
  Alert.alert(
    'Alerta',
    'É preciso conceder acesso à localização para acessar está tela.',
  );
};

const alertParam = (param) => {
  Alert.alert('Alerta', `Autenticado com sucesso! token: ${param}`);
};

export default {
  alertNotImplemented,
  alertParam,
  alertLocationDisable,
  alertFromMessage,
};
