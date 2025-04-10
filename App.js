import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'; // Import useState

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('');
  const [selectedLength, setSelectedLength] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // Default to English

  const genres = ['Fantasy', 'Science Fiction', 'Mystery', 'Adventure', 'Fairy Tale'];
  const ageGroups = ['0-5 years', '6-10 years', '11+ years'];
  const lengths = ['5 minutes', '15 minutes', '30 minutes', '60 minutes'];
  const languages = ['English', 'Hindi', 'Spanish', 'French', 'Russian'];

  const handleGenerateStory = () => {
    // This function will be implemented later
    console.log('Generate Story pressed!');
    console.log('Genre:', selectedGenre);
    console.log('Age Group:', selectedAgeGroup);
    console.log('Length:', selectedLength);
    console.log('Language:', selectedLanguage);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tell Me A Tale</Text>

      <Text style={styles.label}>Choose a Genre:</Text>
      <View style={styles.selectionPlaceholder}>
        {genres.map((genre) => (
          <TouchableOpacity
            key={genre}
            style={[styles.optionButton, selectedGenre === genre && styles.selectedOption]}
            onPress={() => setSelectedGenre(genre)}
          >
            <Text style={[styles.optionButtonText, selectedGenre === genre && styles.selectedOptionText]}>{genre}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Select Age Group:</Text>
      <View style={styles.selectionPlaceholder}>
        {ageGroups.map((age) => (
          <TouchableOpacity
            key={age}
            style={[styles.optionButton, selectedAgeGroup === age && styles.selectedOption]}
            onPress={() => setSelectedAgeGroup(age)}
          >
            <Text style={[styles.optionButtonText, selectedAgeGroup === age && styles.selectedOptionText]}>{age}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Choose Story Length:</Text>
      <View style={styles.selectionPlaceholder}>
        {lengths.map((length) => (
          <TouchableOpacity
            key={length}
            style={[styles.optionButton, selectedLength === length && styles.selectedOption]}
            onPress={() => setSelectedLength(length)}
          >
            <Text style={[styles.optionButtonText, selectedLength === length && styles.selectedOptionText]}>{length}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Choose Language:</Text>
      <View style={styles.selectionPlaceholder}>
        {languages.map((language) => (
          <TouchableOpacity
            key={language}
            style={[styles.optionButton, selectedLanguage === language && styles.selectedOption]}
            onPress={() => setSelectedLanguage(language)}
          >
            <Text style={[styles.optionButtonText, selectedLanguage === language && styles.selectedOptionText]}>{language}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.generateButton} onPress={handleGenerateStory}>
        <Text style={styles.generateButtonText}>Generate Story</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4', // Light background
    paddingHorizontal: 20,
    paddingTop: 40, // Add some top padding for status bar
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333', // Dark text
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
  selectionPlaceholder: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    justifyContent: 'flex-start',
  },
  optionButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedOption: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  selectedOptionText: {
    color: '#fff',
  },
  optionButtonText: {
    color: '#333',
  },
  generateButton: {
    backgroundColor: '#28a745', // Green generate button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 30,
    alignSelf: 'center',
    elevation: 3, // Add a subtle shadow for depth (Android)
    shadowColor: '#000', // Shadow properties for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generateButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});