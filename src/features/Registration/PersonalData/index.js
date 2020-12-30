import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Flex } from '../../../common';
import PersonalDataForm from './PersonalDataForm';

const PersonalData = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView indicatorStyle="white">
        <Flex width={92} horizontalMargin={15}>
          <PersonalDataForm navigation={navigation} />
        </Flex>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalData;
