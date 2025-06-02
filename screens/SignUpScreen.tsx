import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Modal, FlatList, TouchableWithoutFeedback } from 'react-native';

type RootStackParamList = {
    Home: undefined;
};

type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface SignUpScreenProps {
    navigation: SignUpScreenNavigationProp;
}

export default function SignUpScreen({ navigation }: SignUpScreenProps) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [linkedin, setLinkedin] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');
    const [genderModalVisible, setGenderModalVisible] = useState(false);
    const genderOptions = ['Male', 'Female', 'Other'];

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={{ flex: 1 }}
            keyboardVerticalOffset={80}
        >
            <ScrollView contentContainerStyle={styles.outerContainer} keyboardShouldPersistTaps="handled">
                <View style={styles.card}>
                    <Text style={styles.title}>Create Your Account</Text>

                    <View style={styles.inputContainer}>
                        <Ionicons name="person-outline" size={20} color="#888" style={styles.icon} />
                        <TextInput placeholder="Full Name" value={fullName} onChangeText={setFullName} style={styles.input} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="mail-outline" size={20} color="#888" style={styles.icon} />
                        <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" autoCapitalize="none" />
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="lock-closed-outline" size={20} color="#888" style={styles.icon} />
                        <TextInput placeholder="Password" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry={!showPassword} autoCapitalize="none" />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={20} color="#888" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="calendar-outline" size={20} color="#888" style={styles.icon} />
                        <TextInput
                            placeholder="Age"
                            value={age}
                            onChangeText={setAge}
                            style={styles.input}
                            keyboardType="numeric"
                            returnKeyType="done"
                            onSubmitEditing={() => { }}
                            blurOnSubmit={true}
                        />
                    </View>
                    {/* Gender Dropdown */}
                    <View style={styles.inputContainer}>
                        <Ionicons name="transgender-outline" size={20} color="#888" style={styles.icon} />
                        <TouchableOpacity style={styles.dropdown} onPress={() => setGenderModalVisible(true)}>
                            <Text style={gender ? styles.dropdownText : styles.dropdownPlaceholder}>
                                {gender || 'Select Gender'}
                            </Text>
                            <Ionicons name="chevron-down-outline" size={20} color="#888" />
                        </TouchableOpacity>

                        <Modal visible={genderModalVisible} transparent animationType="fade">
                            <TouchableWithoutFeedback onPress={() => setGenderModalVisible(false)}>
                                <View style={styles.modalOverlay} />
                            </TouchableWithoutFeedback>
                            <View style={styles.modalContent}>
                                <FlatList
                                    data={genderOptions}
                                    keyExtractor={(item) => item}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            style={styles.modalItem}
                                            onPress={() => {
                                                setGender(item);
                                                setGenderModalVisible(false);
                                            }}
                                        >
                                            <Text style={styles.modalItemText}>{item}</Text>
                                        </TouchableOpacity>
                                    )}
                                />
                            </View>
                        </Modal>
                    </View>

                    <Text style={styles.socialTitle}>Social Media (Optional)</Text>

                    <View style={styles.inputContainer}>
                        <Ionicons name="logo-linkedin" size={20} color="#0077b5" style={styles.icon} />
                        <TextInput placeholder="LinkedIn URL" value={linkedin} onChangeText={setLinkedin} style={styles.input} autoCapitalize="none" />
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="logo-instagram" size={20} color="#e1306c" style={styles.icon} />
                        <TextInput placeholder="Instagram Username" value={instagram} onChangeText={setInstagram} style={styles.input} autoCapitalize="none" />
                    </View>

                    <View style={styles.inputContainer}>
                        <Ionicons name="logo-facebook" size={20} color="#1877f3" style={styles.icon} />
                        <TextInput placeholder="Facebook URL" value={facebook} onChangeText={setFacebook} style={styles.input} autoCapitalize="none" />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingBottom: 24,
        backgroundColor: '#f2f2f2',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
        color: '#333',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        minHeight: 48,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        height: 44,
        fontSize: 16,
        color: '#333',
        backgroundColor: 'transparent',
    },
    picker: {
        flex: 1,
        height: 44,
        color: '#333',
        backgroundColor: 'transparent',
    },
    button: {
        backgroundColor: '#4f8cff',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    socialTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 4,
        color: '#333',
    },
    dropdown: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 44,
        paddingHorizontal: 10,
    },
    dropdownText: {
        fontSize: 16,
        color: '#333',
    },
    dropdownPlaceholder: {
        fontSize: 16,
        color: '#888',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    modalContent: {
        position: 'absolute',
        bottom: 100,
        left: 20,
        right: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    modalItem: {
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    modalItemText: {
        fontSize: 16,
        color: '#333',
    },
});
