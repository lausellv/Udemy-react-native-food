import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput value={term} 
      placeholder="Search" 
      style={styles.inputStyle}
        // onChangeText={newTerm => onTermChange(newTerm)}
        onChangeText={onTermChange}
        autoCorrect={false} 
        autoCapitalize="none"
        // onEndEditing={()=> onTermSubmit()}
        onEndEditing={onTermSubmit}
        >
      </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 15
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 10
  },
  inputStyle: {
    // borderColor: 'black',
    // borderWidth: 1,
    fontSize: 18, // default fontSize is 14
    flex: 1
   
  }
});

export default SearchBar;
