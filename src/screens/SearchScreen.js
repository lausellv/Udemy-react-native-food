import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import yelp from '../api/yelp';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]); // we are expecting an array of objects from the API
  const [errorMessage, setErrorMessage] = useState('');
  const searchApi = async (searchTerm) => {
    console.log('Hi there!')
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm, //term: term,
          location: 'Dallas'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('something went wrong');
    }
  };
// call search API when component is first rendered
//searchApi("pasta")
useEffect(()=>{searchApi('pasta')}, [])

  return (
    <View>
      <SearchBar
        term={term}
        // onTermChange={newTerm => setTerm(newTerm)}
        onTermChange={setTerm}
        onTermSubmit={()=>searchApi(term)}
        // onTermSubmit={() => searchApi()}
      />

     {errorMessage ? <Text>{errorMessage}</Text>: null} 
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
