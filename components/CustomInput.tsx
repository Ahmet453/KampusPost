import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';

type Ozellikler = {
  placeholder?: string;
  value?: string;
  onChangeText?: (yeniMetin: string) => void;
  secureTextEntry?: boolean;
} & TextInputProps;

export default function CustomInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  ...diger
}: Ozellikler) {
  return (
    <View style={stiller.kutuDis}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={stiller.girdi}
        {...diger}
      />
    </View>
  );
}

const stiller = StyleSheet.create({
  kutuDis: {
    width: '100%',
    marginBottom: 12,
  },
  girdi: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});
