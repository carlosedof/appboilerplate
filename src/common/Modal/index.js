import React, { useCallback, useEffect, useState } from 'react';
import { Modal as PaperModal, Portal } from 'react-native-paper';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Metrics } from '../../config';
import Text from '../Text';
import Button from '../Button';
import {
  ButtonContainer,
  CloseButtonContainer,
  Container,
  FirstImage,
} from './styles';
import Icon from '../Icon';

export default ({ navigation, route }) => {
  const [closing, setClosing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  if (!route) return <></>;
  const {
    visible,
    component: ComponentToRender,
    width = Metrics.screenWidth - Metrics.spacingXLG,
    height,
    footerButtons,
    closable = true,
    title,
    image,
    texts,
    uniqueBtn,
    btnRight,
    btnLeft,
  } = route.params;

  useEffect(() => {
    setTimeout(() => {
      setModalVisible(visible);
    }, 200);
  }, [visible]);

  const closeModal = useCallback(() => {
    if (!closing) {
      setModalVisible(false);
      setClosing(true);
      navigation.goBack();
    }
  }, [closing, navigation]);

  return (
    <Portal>
      <PaperModal
        contentContainerStyle={{
          width,
          height,
          ...styles.modalContainer,
        }}
        onClose={closeModal}
        visible={modalVisible}
        footer={footerButtons}
        onDismiss={closeModal}
        dismissable={closable}
      >
        {closable && <CloseButton handleClose={closeModal} />}
        {ComponentToRender && <ComponentToRender navigation={navigation} />}
        {!ComponentToRender && (
          <Container>
            {title && (
              <Text textAlign="center" color="black" size={Metrics.fontSize.sm}>
                {title}
              </Text>
            )}
            {image && (
              <FirstImage
                source={image.source}
                height={image.height}
                width={image.width}
              />
            )}
            {texts &&
              texts.map((t, index) => (
                <Text
                  textAlign="center"
                  color="black"
                  key={index}
                  size={Metrics.fontSize.sm}
                >
                  {t}
                </Text>
              ))}
            {uniqueBtn && (
              <ButtonContainer>
                <Button
                  style={{
                    marginTop: Metrics.spacingLG,
                  }}
                  label={(btnRight || btnLeft).text}
                  onPress={(btnRight || btnLeft).onPress}
                />
              </ButtonContainer>
            )}
          </Container>
        )}
      </PaperModal>
    </Portal>
  );
};

const CloseButton = ({ handleClose }) => {
  return (
    <CloseButtonContainer>
      <TouchableOpacity onPress={handleClose}>
        <Icon
          size={30}
          color={Colors.mainTheme.gray}
          iconName="close"
          source="MaterialIcons"
        />
      </TouchableOpacity>
    </CloseButtonContainer>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    borderRadius: Metrics.spacingMD,
    backgroundColor: Colors.mainTheme.white,
    marginLeft: Metrics.spacingXLG / 2,
    marginRight: Metrics.spacingXLG / 2,
    padding: Metrics.spacingMD,
  },
});
