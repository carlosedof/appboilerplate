const openModal = ({ navigation, component = null, ...rest }) => {
  navigation.navigate('Modal', {
    visible: true,
    component,
    ...rest,
  });
};

export { openModal };
