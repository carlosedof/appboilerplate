import React, { useCallback, useEffect, useState } from 'react';
import Text from '../Text';
import { Colors } from '../../config';
import Metrics from '../../config/Metrics';
import Flex from '../Flex';
import { ChipStyled, TouchableStyled } from './styles';
import { Icon } from '../index';
import InputText from '../InputText';
import Whitespace from '../Whitespace';

const ChipInputList = ({
  label,
  onChange,
  value = [],
  suggestions = [],
  lazyChange,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState(value);
  const [suggestionsFiltered, setSuggestionsFiltered] = useState([]);

  const handleAddField = (newValue) => {
    setInputValue('');
    const newItem = { id: 0, nome: newValue };
    if (!isDuplicatedItem(newItem)) {
      setItems((oldState) => [...oldState, newItem]);
    }
    setSuggestionsFiltered([]);
  };

  const handleChangeInputValue = (newValue) => {
    setInputValue(newValue);
    if (lazyChange) {
      lazyChange(newValue);
    }
  };

  const isDuplicatedItem = useCallback(
    (item) => {
      const newItem = item.id === 0;
      let alreadyExist;
      if (newItem) {
        alreadyExist = !!items.find(
          (i) => item.nome.toUpperCase() === i.nome.toUpperCase(),
        );
      } else {
        alreadyExist = !!items.find((i) => item.id === i.id);
      }
      return alreadyExist || !item.nome.trim();
    },
    [items],
  );

  useEffect(() => onChange(items), [items]);

  useEffect(() => {
    if (inputValue.trim()) {
      setSuggestionsFiltered(
        suggestions.filter(
          (s) => s.nome.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1,
        ),
      );
    } else {
      setSuggestionsFiltered([]);
    }
  }, [inputValue, suggestions]);

  return (
    <Flex
      justify="flex-start"
      align="flex-start"
      verticalMargin={Metrics.spacing.minimum}
    >
      <Text color={Colors.mainTheme.aux} size={Metrics.fontSize.sm}>
        {label}
      </Text>
      <Whitespace height={Metrics.spacing.sm} />
      <InputText
        value={inputValue}
        onChange={handleChangeInputValue}
        button={{ onPress: handleAddField, src: 'AntDesign', name: 'plus' }}
      />
      {suggestionsFiltered.length > 0 && (
        <Flex
          dir="row"
          justify="flex-start"
          verticalMargin={Metrics.spacing.minimum}
          flexWrap
        >
          <Text color={Colors.mainTheme.aux} size={Metrics.fontSize.xxsm}>
            Sugestões:
          </Text>
          {suggestionsFiltered.map((item, index) => (
            <TouchableStyled
              margin={Metrics.spacing.minimum}
              key={index}
              onPress={() => {
                if (!isDuplicatedItem(item)) {
                  setItems((oldList) => [...oldList, item]);
                }
                setSuggestionsFiltered([]);
                setInputValue('');
              }}
            >
              <ChipStyled>
                <Text color={Colors.mainTheme.aux} size={Metrics.fontSize.xxsm}>
                  {item.nome}
                </Text>
                <Whitespace width={Metrics.spacing.minimum} />
                <Icon
                  source="AntDesign"
                  iconName="plus"
                  color={Colors.mainTheme.primary}
                  size={18}
                />
              </ChipStyled>
            </TouchableStyled>
          ))}
        </Flex>
      )}
      <Flex
        dir="row"
        justify="flex-start"
        verticalMargin={Metrics.spacing.minimum}
        flexWrap
      >
        {items.map((item, index) => (
          <TouchableStyled
            margin={Metrics.spacing.sm}
            key={index}
            onPress={() => {
              setItems((oldList) => oldList.filter((i) => i !== item));
            }}
          >
            <ChipStyled>
              <Text color={Colors.mainTheme.aux} size={Metrics.fontSize.sm}>
                {item.nome}
              </Text>
              <Whitespace width={Metrics.spacing.minimum} />
              <Icon
                source="AntDesign"
                iconName="close"
                color={Colors.softRed}
                size={18}
              />
            </ChipStyled>
          </TouchableStyled>
        ))}
      </Flex>
    </Flex>
  );
};

export default ChipInputList;
