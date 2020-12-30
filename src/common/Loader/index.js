import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import Colors from '../../config/Colors';
import { ActivityIndicatorStyled, LoaderStyled } from './styles';
import Text from '../Text';
import { Whitespace } from '../index';
import { Metrics } from '../../config';

const Loader = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
    }).start();
  }, [loading]);

  useEffect(() => {
    setLoading(false);
  }, []);

  return loading ? (
    <Animated.View
      style={{
        ...styles,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      <LoaderStyled>
        <Text size={Metrics.fontSize.xsm} color={Colors.mainTheme.aux}>
          Por favor aguarde. Carregando...
        </Text>
        <Whitespace height={Metrics.spacing.lg} />
        <ActivityIndicatorStyled size="large" color={Colors.mainTheme.aux} />
      </LoaderStyled>
    </Animated.View>
  ) : (
    <></>
  );
};

export default Loader;

const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'absolute',
  width: '100%',
  height: '100%',
};
