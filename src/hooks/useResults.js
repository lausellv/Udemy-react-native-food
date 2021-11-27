import { useState, useEffect } from 'react';
import yelp from '../api/yelp.js';

function useResults() {
  const [results, setResults] = useState([]); // we are expecting an array of objects from the API
  const [errorMessage, setErrorMessage] = useState('');

  // this is the business logic that was originally in the SearchScreen component
  const searchApi = async searchTerm => {
    console.log('Hi there!');
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm, //term: term,
          location: 'San Juan'
          
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('something went wrong');
    }
  };
  // call search API when component is first rendered
  //searchApi("pasta")
  useEffect(() => {
    searchApi('pasta');
  }, []);

  // we need to return the parts needed in out SearchScreen
  return [searchApi, results, errorMessage];
}

export default useResults;
