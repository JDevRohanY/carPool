import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import type { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  SearchFlights: undefined;
  CarpoolList: undefined;
};

type SearchFlightsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SearchFlights'
>;

interface Props {
  navigation: SearchFlightsScreenNavigationProp;
}

export default function SearchFlightsScreen({ navigation }: Props) {
  const [flightNumber, setFlightNumber] = useState('');
  const [date, setDate] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Your Flight</Text>

      <TextInput
        placeholder="Flight Number"
        value={flightNumber}
        onChangeText={setFlightNumber}
        style={styles.input}
      />

      <TextInput
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
        style={styles.input}
      />

      <Button title="Find Carpools" onPress={() => navigation.navigate('CarpoolList')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, borderRadius: 8, marginBottom: 15 },
});
