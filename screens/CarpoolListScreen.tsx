import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const MOCK_CARPOOLS = [
  { id: '1', name: 'Alice', seat: '3 available', contact: 'alice@example.com' },
  { id: '2', name: 'Bob', seat: '1 available', contact: 'bob@example.com' },
];

export default function CarpoolListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Carpools</Text>

      <FlatList
        data={MOCK_CARPOOLS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text>{item.seat}</Text>
            <Text>{item.contact}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
});
