import React, { useEffect, useState, useCallback } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { Container } from './styles';
import { PageTemplate } from '../../templates';
import { Images, Metrics, LocationUtils } from '../../config';
import { Storage } from '../../utils';
import { Flex, Loader, Text } from '../../common';

const SplashScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const safeAreaInsets = useSafeAreaInsets();

  useEffect(() => {
    (async () => {
      const response = await Storage.getFirstLoad();
      const isFirstLoad = !response;
      if (isFirstLoad) {
        handleCheckLocationPermission(isFirstLoad);
      } else {
        handleNavigate('SelectUserType');
      }
    })();
  }, []);

  const handleCheckLocationPermission = () => {
    const dontHavePermission = () => {
      setLoading(false);
      handleRequestLocationPermission();
    };
    const havePermission = () => {
      handleNavigate('Intro');
    };
    LocationUtils.checkPermission(havePermission, dontHavePermission);
  };

  const handleRequestLocationPermission = () => {
    LocationUtils.requestPermission(() => {
      handleNavigate('Intro');
    });
  };

  const handleNavigate = useCallback(
    (screen) => {
      navigation.replace(screen);
    },
    [navigation],
  );

  return (
    <PageTemplate>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Flex verticalMargin={safeAreaInsets.top * 5}>
            <TouchableOpacity onPress={() => handleNavigate('Login')}>
              <Text>Tela inicial</Text>
            </TouchableOpacity>
          </Flex>
        </Container>
      )}
    </PageTemplate>
  );
};

export default SplashScreen;
