import RNLocation from 'react-native-location';
import Alerts from './Alerts';

const validateError = (error) => {
  if (error) {
    switch (error.code) {
      case 1: {
        Alerts.alertFromMessage({
          message: 'Não foi possível obter permissão à localização do celular.',
        });
        break;
      }
      case 2: {
        Alerts.alertFromMessage({
          message:
            'Não foi possível obter acesso à localização do celular, verifique se a localização está ativada.',
        });
        break;
      }
      case 3: {
        Alerts.alertFromMessage({
          message:
            'Tempo excedido ao obter sua localização, reinicie o aplicativo e tente novamente.',
        });
        break;
      }
      case 4: {
        Alerts.alertFromMessage({
          message:
            'O serviço Google Play não está instalado ou possui uma versão mais antiga.',
        });
        break;
      }
      case 5: {
        Alerts.alertFromMessage({
          message:
            'O serviço de localização não está ativado ou o modo de localização não é apropriado para a solicitação atual.',
        });
        break;
      }
      case -1: {
        break;
      }
      default: {
        break;
      }
    }
  }
};

const failedRequestPermission = () => {
  Alerts.alertFromMessage({
    message: 'Não foi possível obter à sua localização.',
  });
};

const locationOption = {
  ios: 'always',
  android: {
    detail: 'fine',
  },
};

const checkPermission = (
  havePermissionCallback,
  dontHavePermissionCallback,
) => {
  RNLocation.checkPermission(locationOption).then((value) => {
    if (!value) {
      dontHavePermissionCallback();
    } else {
      havePermissionCallback();
    }
  });
};

const requestPermission = (
  havePermissionCallback,
  dontHavePermissionCallback,
) => {
  RNLocation.requestPermission(locationOption).then((value) => {
    if (!value) {
      dontHavePermissionCallback();
    } else {
      havePermissionCallback();
    }
  });
};

const getLatestLocation = (successCallback, errorCallback) => {
  RNLocation.getLatestLocation({ timeout: 60000 })
    .then((latestLocation) => {
      if (successCallback) {
        successCallback(latestLocation);
      }
    })
    .catch((err) => {
      if (errorCallback) {
        errorCallback(err);
      }
    });
};

export default {
  validateError,
  failedRequestPermission,
  checkPermission,
  requestPermission,
  getLatestLocation,
};
