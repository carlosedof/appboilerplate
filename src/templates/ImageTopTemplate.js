import React, { useCallback } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { Colors, Metrics } from '../config';
import { Button, Flex, Whitespace } from '../common';
import FlexTouchable from '../common/FlexTouchable';
import {
  ChildrenContainer,
  HeaderTransparent,
  ImageTopTemplateContainer,
  TemplateImage,
} from './styles';

export default ({
  children,
  handleBack,
  showStatusBar = true,
  safeArea,
  header,
  titleColor = Colors.mainTheme.white,
  statusBar = true,
  image,
  scrollable = false,
  btn1,
  btn2,
}) => {
  const navigation = useNavigation();
  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <ImageTopTemplateContainer>
      <StatusBar
        barStyle="default"
        backgroundColor="transparent"
        translucent
        hidden={!statusBar}
      />
      {header && (
        <HeaderTransparent>
          <FlexTouchable
            left={20}
            height={100}
            dir="row"
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
        </HeaderTransparent>
      )}

      <TemplateImage source={image} />
      <ChildrenContainer>
        {/* eslint-disable-next-line no-nested-ternary */}
        {safeArea ? (
          <SafeAreaView>
            {scrollable ? (
              <ScrollView indicatorStyle="white">{children}</ScrollView>
            ) : (
              children
            )}
            <Flex
              verticalPadding={Metrics.spacingLG}
              horizontalPadding={Metrics.spacingMD}
            >
              {btn1 && <Button label={btn1.label} onPress={btn1.onPress} />}
              {btn2 && (
                <>
                  <Whitespace height={Metrics.spacingMD} />
                  <Button
                    bgColor={Colors.mainTheme.softBlack}
                    label={btn2.label}
                    onPress={btn2.onPress}
                  />
                </>
              )}
            </Flex>
          </SafeAreaView>
        ) : scrollable ? (
          <>
            <ScrollView indicatorStyle="white">{children}</ScrollView>
            <Flex
              verticalPadding={Metrics.spacingLG}
              horizontalPadding={Metrics.spacingMD}
            >
              {btn1 && <Button label={btn1.label} onPress={btn1.onPress} />}
              {btn2 && (
                <>
                  <Whitespace height={Metrics.spacingMD} />
                  <Button
                    bgColor={Colors.mainTheme.softBlack}
                    label={btn2.label}
                    onPress={btn2.onPress}
                  />
                </>
              )}
            </Flex>
          </>
        ) : (
          <>
            {children}
            <Flex
              verticalPadding={Metrics.spacingLG}
              horizontalPadding={Metrics.spacingMD}
            >
              {btn1 && <Button label={btn1.label} onPress={btn1.onPress} />}
              {btn2 && (
                <>
                  <Whitespace height={Metrics.spacingMD} />
                  <Button
                    bgColor={Colors.mainTheme.softBlack}
                    label={btn2.label}
                    onPress={btn2.onPress}
                  />
                </>
              )}
            </Flex>
          </>
        )}
      </ChildrenContainer>
    </ImageTopTemplateContainer>
  );
};
