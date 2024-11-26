import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>Teks di Tengah Layar</Text>

      {/* Dua kotak dengan tata letak FlexBox */}
      <View style={styles.boxContainer}>
        <View style={[styles.box, { backgroundColor: '#FF6347' }]} /> {/* Kotak 1 */}
        <View style={[styles.box, { backgroundColor: '#4682B4' }]} /> {/* Kotak 2 */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', // Latar belakang abu-abu terang
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20, // Memberikan jarak dengan kotak
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '98%', // Lebar container untuk memastikan jarak merata
  },
  box: {
    width: 100,
    height: 100,
  },
});
