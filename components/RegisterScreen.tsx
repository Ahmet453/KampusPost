import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import CustomInput from './CustomInput';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [sifre, setSifre] = useState('');
  const [sifreTekrar, setSifreTekrar] = useState('');

  const kayitOl = () => {
    if (sifre !== sifreTekrar) {
      Alert.alert("Hata", "Şifreler uyuşmuyor!");
      return;
    }

    console.log("Kayıt başarılı!");
    console.log("Email:", email);
    console.log("Şifre:", sifre);
  };

  return (
    <View style={styles.sayfa}>
      <Text style={styles.baslik}>Kayıt Ol</Text>

      <CustomInput
        placeholder="E-posta"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <CustomInput
        placeholder="Şifre"
        secureTextEntry
        value={sifre}
        onChangeText={setSifre}
      />

      <CustomInput
        placeholder="Şifre Tekrar"
        secureTextEntry
        value={sifreTekrar}
        onChangeText={setSifreTekrar}
      />

      <TouchableOpacity style={styles.buton} onPress={kayitOl}>
        <Text style={styles.butonMetni}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sayfa: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f9fafb',
  },
  baslik: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
  },
  buton: {
    marginTop: 12,
    backgroundColor: '#16a34a',
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
    borderRadius: 8,
  },
  butonMetni: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});
