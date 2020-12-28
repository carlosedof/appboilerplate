import React from 'react';
import { ErrorMessage, useFormikContext } from 'formik';
import Flex from '../Flex';
import Text from '../Text';
import { Colors } from '../../config';
import Metrics from '../../config/Metrics';
import Bold from '../Bold';
import { Whitespace } from '../index';
import ErrorLabel from '../ErrorLabel';
import { View } from 'react-native';

const ErrorContainer = () => {
  const { errors, submitCount } = useFormikContext();

  return (
    <>
      <Flex verticalMargin={15}>
        {Object.keys(errors).map((field, index) => (
          <View key={index}>
            {index === 0 && submitCount > 0 && (
              <>
                <Text
                  color={Colors.mainTheme.error}
                  size={Metrics.fontSize.xsm}
                >
                  <Bold>
                    Há erros no formulário, favor corrigir os seguintes
                    problemas:
                  </Bold>
                </Text>
                <Whitespace height={10} />
              </>
            )}
            <ErrorMessage
              key={field}
              name={field}
              render={(msg) => <ErrorLabel>{msg}</ErrorLabel>}
            />
          </View>
        ))}
      </Flex>
    </>
  );
};

export default ErrorContainer;
