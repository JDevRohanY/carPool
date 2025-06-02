import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import type { StackNavigationProp } from '@react-navigation/stack';

type ProfileScreenProps = {
  navigation: StackNavigationProp<any>;
};

export default function ProfileScreen({ navigation }: ProfileScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <Text>Name: John Doe</Text>
      <Text>Email: johndoe@example.com</Text>
      <Text>Age: 28</Text>
      <Text>Gender: Male</Text>

      <Button title="Logout" onPress={() => navigation.navigate('Onboarding')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
