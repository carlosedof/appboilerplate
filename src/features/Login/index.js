import React from 'react';
import { Formik } from 'formik';
import { TouchableOpacity } from 'react-native';
import { useAuthLoginRequest } from '../../store/hooks/auth';
import { Button, Flex, FormInputText, Text } from '../../common';
import { Colors, Metrics, NavigationService } from '../../config';
import { Constants } from '../../utils';

const Login = ({
  navigateTo,
  isRouteName,
  description = '',
  registerOption,
  submitLabel = Constants.CONTINUE,
}) => {
  const authLoginRequest = useAuthLoginRequest();

  const onSubmit = (values) => {
    authLoginRequest(values, navigateTo, isRouteName);
  };

  const handleRegister = () => {
    NavigationService.navigate({ name: 'Registration' });
  };

  return (
    <>
      <Formik initialValues={{}} onSubmit={onSubmit}>
        {({ values, handleSubmit }) => (
          <>
            <Flex verticalMargin={25}>
              <Text
                textAlign="center"
                size={Metrics.fontSize.md}
                color={Colors.mainTheme.aux}
                bolder
              >
                Acesso Restrito
              </Text>
            </Flex>
            <Flex width={90} style={{ alignSelf: 'center' }}>
              <Text
                textAlign="center"
                size={Metrics.fontSize.sm}
                color={Colors.mainTheme.aux}
              >
                {description}
              </Text>
            </Flex>
            <Flex verticalMargin={25}>
              <FormInputText
                value={values.cpf}
                label="CPF"
                name="cpf"
                type="number"
              />
              <FormInputText
                value={values.senha}
                label="Senha"
                name="senha"
                type="password"
              />
            </Flex>
            <Flex verticalMargin={10}>
              <Button
                bgColor={Colors.mainTheme.btnPrimary}
                label={submitLabel}
                // onPress={() => handleSubmit()}
                onPress={() => NavigationService.navigate({ name: 'Home' })}
              />
              <Button
                label="Esqueci minha senha"
                color={Colors.mainTheme.primary}
                onlyText
              />
            </Flex>
            {registerOption && (
              <Flex dir="row">
                <Text size={Metrics.fontSize.xsm} color={Colors.mainTheme.aux}>
                  Ainda não tem conta?
                </Text>
                <TouchableOpacity onPress={handleRegister}>
                  <Text
                    color={Colors.mainTheme.primary}
                    size={Metrics.fontSize.xsm}
                    bolder
                  >
                    Cadastre-se
                  </Text>
                </TouchableOpacity>
              </Flex>
            )}
          </>
        )}
      </Formik>
    </>
  );
};

export default Login;
