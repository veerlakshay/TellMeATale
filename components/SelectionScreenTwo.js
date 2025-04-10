import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import Picker

const lengths = ['5 minutes', '15 minutes', '30 minutes', '60 minutes'];
const languages = ['English', 'Hindi', 'Spanish', 'French', 'Russian'];

const SelectionScreenTwo = ({ navigation, route }) => {
    const { genre, ageGroup } = route.params;
    const [selectedLength, setSelectedLength] = useState(lengths[0]);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    const handleGenerate = () => {
        // This function will be implemented later to call Ollama
        console.log('Generate Story pressed from Screen Two!');
        console.log('Genre:', genre);
        console.log('Age Group:', ageGroup);
        console.log('Length:', selectedLength);
        console.log('Language:', selectedLanguage);
        // In the future, navigate to the story display screen
    };

    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Story Preferences</Text>
            <Text style={styles.subtitle}>Step 2 of 2</Text>

            <Text style={styles.label}>Choose Story Length:</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedLength}
                    onValueChange={(itemValue) => setSelectedLength(itemValue)}
                    style={styles.picker}
                >
                    {lengths.map((length, index) => (
                        <Picker.Item key={index} label={length} value={length} />
                    ))}
                </Picker>
            </View>

            <Text style={styles.label}>Choose Language:</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
                    style={styles.picker}
                >
                    {languages.map((language, index) => (
                        <Picker.Item key={index} label={language} value={language} />
                    ))}
                </Picker>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.generateButton} onPress={handleGenerate}>
                    <Text style={styles.generateButtonText}>Generate Story</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#777',
        marginBottom: 30,
        textAlign: 'center',
    },
    label: {
        fontSize: 18,
        color: '#555',
        marginBottom: 10,
        marginTop: 15,
        alignSelf: 'flex-start',
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    picker: {
        height: 50,
        color: '#333',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    backButton: {
        backgroundColor: '#6c757d', // Gray back button
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        flex: 1,
        marginRight: 10,
    },
    backButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    generateButton: {
        backgroundColor: '#28a745', // Green generate button
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        flex: 1,
        marginLeft: 10,
    },
    generateButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SelectionScreenTwo;