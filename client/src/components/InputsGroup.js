import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import React from 'react';

const InputsGroup = ({
  name,
  type,
  placeholder,
  onChangeHandler,
  value,
  errors,
}) => {
  const inputType = type || 'text';
  return (
    <FormControl isInvalid={errors}>
      <FormLabel>{name}</FormLabel>
      {name === 'categorie' ? (
        <Select
          name={name}
          onChange={onChangeHandler}
          value={value}
          placeholder={placeholder || type}
        >
          <option value="web">Web</option>
          <option value="design">Design</option>
          <option value="marketing">Marketing</option>
          <option value="customer support">Customer support</option>
          <option value="translation">Translation</option>
          <option value="editing">Editing</option>
        </Select>
      ) : name === 'status' ? (
        <Select
          name={name}
          onChange={onChangeHandler}
          value={value}
          placeholder={placeholder || type}
        >
          <option value="enligne">enligne</option>
          <option value="invisible">invisible</option>
          <option value="inactifs">inactifs</option>
          <option value="ne pas deranger">ne pas deranger</option>
        </Select>
      ) : (
        <Input
          type={inputType}
          name={name}
          onChange={onChangeHandler}
          value={value}
          placeholder={placeholder || type}
        />
      )}

      {errors &&
        errors?.map((err) => {
          return <FormErrorMessage>{err}</FormErrorMessage>;
        })}
    </FormControl>
  );
};

export default InputsGroup;
