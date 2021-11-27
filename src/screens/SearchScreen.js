import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

//We don't need this anymore bc we created a useResults file.
// import yelp from '../api/yelp';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  // console.log(navigation);
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    // price === $ || $$ || $$$

    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    //  by doing this we don't have to worry about flex 1
    // <View style={{flex:1}}>
    <>
      <SearchBar
        term={term}
        // onTermChange={newTerm => setTerm(newTerm)}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
        // onTermSubmit={() => searchApi()}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>We have found {results.length} results</Text> */}
      <ScrollView>
        <ResultsList  results={filterResultsByPrice('$')} title="Cost Effective" />
        <ResultsList  results={filterResultsByPrice('$$')} title="Bit Pricier" />
        <ResultsList  results={filterResultsByPrice('$$$')} title="Big Spender" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
