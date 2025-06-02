// screens/OnboardingScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any, 'Onboarding'>;

export default function OnboardingScreen({ navigation }: Props) {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.card}>
        <Image source={require('../assets/icon.png')} style={styles.logo} />
        <Text style={styles.title}>FlightConnect</Text>
        <Text style={styles.subtitle}>Connect with fellow travelers heading to the same destination</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.buttonText, styles.buttonOutlineText]}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#eaf1fb' },
  card: { width: '100%', maxWidth: 400, backgroundColor: '#fff', borderRadius: 18, padding: 32, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 8, elevation: 4 },
  logo: { width: 72, height: 72, marginBottom: 18 },
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 12, color: '#2d3a4b', letterSpacing: 1 },
  subtitle: { fontSize: 16, marginBottom: 36, textAlign: 'center', color: '#4f5b6b' },
  button: { width: '100%', backgroundColor: '#4f8cff', paddingVertical: 14, borderRadius: 10, alignItems: 'center', marginBottom: 14 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  buttonOutline: { backgroundColor: '#fff', borderWidth: 2, borderColor: '#4f8cff' },
  buttonOutlineText: { color: '#4f8cff' },
});
