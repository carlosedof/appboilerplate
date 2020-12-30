import React, { useEffect } from 'react';
import { Formik } from 'formik';
import {
  Button,
  Flex,
  FormInputDate,
  FormInputText,
  Text,
  Whitespace,
} from '../../../../common';
import { Colors, Metrics } from '../../../../config';
import FormPicker from '../../../../common/FormPicker';
import {
  useUserReset,
  useRegistrationData,
  useSaveRegistrationData,
} from '../../../../store/hooks/user';
import ValidationSchema from './ValidationSchema';
import ErrorContainer from '../../../../common/ErrorContainer';
import CustomCPFField from './CustomCPFField';

const PersonalDataForm = ({ navigation }) => {
  const saveRegistrationData = useSaveRegistrationData();
  const registrationData = useRegistrationData();
  const resetState = useUserReset();

  const onSubmit = (values) => {
    saveRegistrationData({ ...registrationData, ...values });
    navigation.navigate('ContactData');
  };

  useEffect(() => resetState(), [resetState]);

  return (
    <Formik
      validationSchema={ValidationSchema}
      initialValues={registrationData}
      onSubmit={onSubmit}
    >
      {({ values, handleSubmit }) => (
        <>
          <Flex
            verticalMargin={Metrics.spacing.lg}
            verticalPadding={Metrics.spacing.md}
          >
            <Text
              textAlign="center"
              size={Metrics.fontSize.md}
              color={Colors.mainTheme.aux}
              bolder
            >
              Efetue seu cadastro
            </Text>
          </Flex>
          <Flex width={100}>
            <Text
              textAlign="center"
              size={Metrics.fontSize.sm}
              color={Colors.mainTheme.aux}
            >
              Preencha as informações para completar seu cadastro
            </Text>
          </Flex>
          {/* <Steps
            current={0}
            steps={[
              { name: 'Dados Pessoais' },
              { name: 'Dados de xxxxx' },
              { name: 'Dados de xxxxx' },
            ]}
          /> */}
          <Flex>
            <CustomCPFField required />
            <FormInputText
              value={values.rg}
              label="RG"
              name="rg"
              type="number"
              required
            />
            <FormPicker
              value={values.sexo}
              label="Sexo"
              name="sexo"
              placeholder="Selecione o sexo"
              list={[
                {
                  label: 'Masculino',
                  value: 'Masculino',
                },
                { label: 'Feminino', value: 'Feminino' },
              ]}
              required
            />
            <FormInputText
              value={values.nome}
              label="Nome"
              name="nome"
              required
            />
            <FormInputText
              value={values.sobrenome}
              label="Sobrenome"
              name="sobrenome"
              required
            />
            <FormInputDate
              name="data_nascimento"
              label="Data de Nascimento"
              maxDate={new Date()}
              value={values.data_nascimento}
              required
            />
          </Flex>
          <ErrorContainer />
          <Flex verticalMargin={Metrics.spacing.md}>
            <Button label="Continuar" onPress={() => handleSubmit()} />
            <Whitespace height={Metrics.spacing.md} />
            <Button
              onlyText
              label="Cancelar"
              onPress={() => navigation.navigate('Home')}
            />
          </Flex>
        </>
      )}
    </Formik>
  );
};

export default PersonalDataForm;
