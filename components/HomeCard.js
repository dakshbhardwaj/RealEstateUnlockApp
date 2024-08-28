import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HomeCard = ({ home, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: home.image }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.address}>{home.address}</Text>
          <Text>{home.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
  },
  details: {
    padding: 10,
    flex: 1,
  },
  address: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default HomeCard;
