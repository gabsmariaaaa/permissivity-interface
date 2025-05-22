// src/screens/DashboardScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Dashboard!</Text>
      <Text style={styles.text}>Aqui você poderá gerenciar permissões.</Text>

      <Button title="Sair" onPress={() => navigation.replace('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#e8f0fe' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  text: { fontSize: 16, marginBottom: 30, textAlign: 'center' },
});
