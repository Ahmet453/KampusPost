import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import CustomInput from './CustomInput';

export default function LoginScreen() {
  const [eposta, epostaAyarla] = useState('');
  const [sifre, sifreAyarla] = useState('');

  const girisButonunaBasildi = () => {
    console.log('E-posta:', eposta);
    console.log('Şifre:', sifre);
    // İstersen hoca baksın diye küçük bir uyarı da gösterebilirsin:
    // Alert.alert('Bilgi', 'Değerler konsola yazdırıldı.');
  };

  return (
    <View style={stiller.sayfa}>
      <Text style={stiller.baslik}>Giriş Yap</Text>

      <CustomInput
        placeholder="E-posta"
        value={eposta}
        onChangeText={epostaAyarla}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <CustomInput
        placeholder="Şifre"
        value={sifre}
        onChangeText={sifreAyarla}
        secureTextEntry
      />

      <TouchableOpacity style={stiller.buton} onPress={girisButonunaBasildi}>
        <Text style={stiller.butonMetni}>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
}

const stiller = StyleSheet.create({
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
    marginTop: 8,
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  butonMetni: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});
