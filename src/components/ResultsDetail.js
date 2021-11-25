import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
  console.log(result);
  return (
    <View style={styles.containerStyle}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 120,
    width: 250,
    borderRadius: 3,
    marginBottom: 5
  },
  nameStyle: {
    fontWeight: '700'
  },
  containerStyle: {
    marginLeft: 15
  }
});

export default ResultsDetail;
