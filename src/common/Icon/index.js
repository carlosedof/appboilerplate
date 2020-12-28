import React from 'react';
import { View } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconZocial from 'react-native-vector-icons/Zocial';

export default function Icon({ iconName, source, color, size = 30, rest }) {
  const getIconLib = () => {
    switch (source) {
      case 'AntDesign': {
        return (
          <IconAntDesign name={iconName} size={size} color={color} {...rest} />
        );
      }
      case 'Entypo': {
        return (
          <IconEntypo name={iconName} size={size} color={color} {...rest} />
        );
      }
      case 'EvilIcons': {
        return (
          <IconEvilIcons name={iconName} size={size} color={color} {...rest} />
        );
      }
      case 'Feather': {
        return (
          <IconFeather name={iconName} size={size} color={color} {...rest} />
        );
      }
      case 'FontAwesome': {
        return (
          <IconFontAwesome
            name={iconName}
            size={size}
            color={color}
            {...rest}
          />
        );
      }
      case 'FontAwesome5': {
        return (
          <IconFontAwesome5
            name={iconName}
            size={size}
            color={color}
            {...rest}
          />
        );
      }
      case 'FontAwesome5Pro': {
        return (
          <IconFontAwesome5Pro
            name={iconName}
            size={size}
            color={color}
            {...rest}
          />
        );
      }
      case 'Fontisto': {
        return (
          <IconFontisto name={iconName} size={size} color={color} {...rest} />
        );
      }
      case 'Foundation': {
        return (
          <IconFoundation name={iconName} size={size} color={color} {...rest} />
        );
      }
      case 'Ionicons': {
        return (
          <IconIonicons name={iconName} size={size} color={color} {...rest} />
        );
      }
      case 'MaterialIcons': {
        return (
          <IconMaterialIcons
            name={iconName}
            size={size}
            color={color}
            {...rest}
          />
        );
      }
      case 'MaterialCommunityIcons': {
        return (
          <IconMaterialCommunityIcons
            name={iconName}
            size={size}
            color={color}
            {...rest}
          />
        );
      }
      case 'SimpleLineIcons': {
        return (
          <IconSimpleLineIcons
            name={iconName}
            size={size}
            color={color}
            {...rest}
          />
        );
      }
      case 'Zocial': {
        return (
          <IconZocial name={iconName} size={size} color={color} {...rest} />
        );
      }
      default:
        return null;
    }
  };

  return <View>{getIconLib()}</View>;
}
