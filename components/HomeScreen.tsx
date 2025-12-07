import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

export default function HomeScreen() {
  const [postlar, postlariAyarla] = useState([]);
  const [yukleniyor, yukleniyorAyarla] = useState(true);

  // 1) API'den verileri çek
  const fetchPosts = async () => {
    try {
      const cevap = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await cevap.json();
      postlariAyarla(data);
    } catch (hata) {
      console.log("Veri çekme hatası:", hata);
    } finally {
      yukleniyorAyarla(false);
    }
  };

  // 2) Sayfa açıldığında veriyi çek
  useEffect(() => {
    fetchPosts();
  }, []);

  // 3) Yükleniyor durumu
  if (yukleniyor) {
    return (
      <View style={stiller.yukleniyor}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 10 }}>Yükleniyor...</Text>
      </View>
    );
  }

  return (
    <View style={stiller.sayfa}>
      <Text style={stiller.baslik}>Gönderiler</Text>

      <FlatList
        data={postlar}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={stiller.postKart}>
            <Text style={stiller.postBaslik}>{item.title}</Text>
            <Text style={stiller.postIcerik}>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
}

const stiller = StyleSheet.create({
  sayfa: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f1f5f9',
  },
  baslik: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 16,
  },
  yukleniyor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  postKart: {
    backgroundColor: "white",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  postBaslik: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },
  postIcerik: {
    fontSize: 15,
    color: "#374151",
  },
});
