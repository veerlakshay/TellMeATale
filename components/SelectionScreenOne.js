import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import Picker

const genres = [
    'Fantasy', 'Science Fiction', 'Mystery', 'Adventure', 'Fairy Tale',
    'Historical Fiction', 'Horror', 'Thriller', 'Romance', 'Contemporary',
    'Young Adult', 'Middle Grade', 'Children\'s Literature', 'Mythology', 'Legend',
];

const ageGroups = [
    '0-3 years', '4-7 years', '8-12 years', '13-16 years', '17+ years',
];

const SelectionScreenOne = ({ navigation, route }) => {
    const [selectedGenre, setSelectedGenre] = useState(route.params?.genre || genres[0]);
    const [selectedAgeGroup, setSelectedAgeGroup] = useState(route.params?.ageGroup || ageGroups[0]);

    const handleNext = () => {
        navigation.navigate('SelectionScreenTwo', { genre: selectedGenre, ageGroup: selectedAgeGroup });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tell Me A Tale</Text>

            <Text style={styles.label}>Choose a Genre:</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedGenre}
                    onValueChange={(itemValue) => setSelectedGenre(itemValue)}
                    style={styles.picker}
                >
                    {genres.map((genre, index) => (
                        <Picker.Item key={index} label={genre} value={genre} />
                    ))}
                </Picker>
            </View>

            <Text style={styles.label}>Select Age Group:</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedAgeGroup}
                    onValueChange={(itemValue) => setSelectedAgeGroup(itemValue)}
                    style={styles.picker}
                >
                    {ageGroups.map((age, index) => (
                        <Picker.Item key={index} label={age} value={age} />
                    ))}
                </Picker>
            </View>

            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
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
    nextButton: {
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 30,
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default SelectionScreenOne;