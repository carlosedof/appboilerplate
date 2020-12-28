import React, { useCallback } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { Header, Title } from './styles';
import { Colors } from '../config';
import FlexTouchable from '../common/FlexTouchable';
import { Bold, Icon, Text } from '../common';
import { useAuthLoginRequest } from '../store/hooks/auth';

export default ({
  children,
  handleBack,
  title,
  headerStyle,
  safeArea,
  header,
  titleColor = Colors.mainTheme.white,
  statusBar = true,
  rounded = false,
  scrollable = false,
}) => {
  const safeAreaInsets = useSafeAreaInsets();
  const navigation = useNavigation();
  // TODO remover isso em prod, é apenas para facilitar qdo o token perder validade
  const authLoginRequest = useAuthLoginRequest();
  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <>
      <StatusBar
        barStyle="default"
        backgroundColor="transparent"
        translucent
        hidden={!statusBar}
      />
      {header && (
        <Header
          style={headerStyle}
          rounded={rounded}
          statusBarHeight={safeAreaInsets.top}
        >
          <FlexTouchable
            left={20}
            height={100}
            width={20}
            bottom={0}
            dir="row"
            position="absolute"
            align="center"
            justify="flex-start"
            onPress={handleBack || handleGoBack}
            zIndex={1}
          >
            <IconIonicons
              name="ios-arrow-back"
              size={25}
              color={titleColor || Colors.mainTheme.white}
            />
          </FlexTouchable>
          <Title titleColor={titleColor}>
            <Bold>{title}</Bold>
          </Title>
          <FlexTouchable
            position="absolute"
            right={20}
            width={15}
            onPress={() => authLoginRequest({ cpf: '123', senha: 'admin' })}
          >
            <Icon
              size={15}
              color={Colors.mainTheme.white}
              iconName="login"
              source="AntDesign"
            />
          </FlexTouchable>
        </Header>
      )}
      {/* eslint-disable-next-line no-nested-ternary */}
      {safeArea ? (
        <SafeAreaView>
          {scrollable ? (
            <ScrollView indicatorStyle="white">{children}</ScrollView>
          ) : (
            children
          )}
        </SafeAreaView>
      ) : scrollable ? (
        <ScrollView indicatorStyle="white">{children}</ScrollView>
      ) : (
        children
      )}
    </>
  );
};
