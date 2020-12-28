import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import Colors from '../../config/Colors';
import { ActivityIndicatorStyled, LoaderStyled } from './styles';
import Text from '../Text';
import { Whitespace } from '../index';
import { Metrics } from '../../config';
import { useAuthIsFetching } from '../../store/hooks/auth';
import { useAddressIsFetching } from '../../store/hooks/address';
import { useAllergyIsFetching } from '../../store/hooks/allergy';
import { usePatientIsFetching } from '../../store/hooks/patient';
import { usePreDiseaseIsFetching } from '../../store/hooks/preDisease';
import { useSelfEvaluationIsFetching } from '../../store/hooks/selfEvaluation';
import { useSymptomIsFetching } from '../../store/hooks/symptom';
import { useUbsIsFetching } from '../../store/hooks/ubs';

const Loader = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const [loading, setLoading] = useState(false);
  const authLoading = useAuthIsFetching();
  const addressLoading = useAddressIsFetching();
  const allergyLoading = useAllergyIsFetching();
  const patientLoading = usePatientIsFetching();
  const preDiseaseLoading = usePreDiseaseIsFetching();
  const selfEvaluationLoading = useSelfEvaluationIsFetching();
  const symptomLoading = useSymptomIsFetching();
  const ubsLoading = useUbsIsFetching();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
    }).start();
  }, [loading]);

  useEffect(() => {
    setLoading(
      authLoading ||
        addressLoading ||
        allergyLoading ||
        allergyLoading ||
        patientLoading ||
        preDiseaseLoading ||
        selfEvaluationLoading ||
        symptomLoading ||
        ubsLoading,
    );
  }, [
    authLoading,
    addressLoading,
    allergyLoading,
    allergyLoading,
    patientLoading,
    preDiseaseLoading,
    selfEvaluationLoading,
    symptomLoading,
    ubsLoading,
  ]);

  return loading ? (
    <Animated.View
      style={{
        ...styles,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      <LoaderStyled>
        <Text size={Metrics.fontSize.xsm} color={Colors.mainTheme.black}>
          Por favor aguarde. Carregando...
        </Text>
        <Whitespace height={Metrics.spacingLG} />
        <ActivityIndicatorStyled size="large" color={Colors.mainTheme.black} />
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
