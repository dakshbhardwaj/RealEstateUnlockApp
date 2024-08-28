import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import HomeCard from '../components/HomeCard';

const HomeListScreen = ({ navigation }) => {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    const fetchHomes = async () => {
      const response = await require('../mock-api/homes.json');
      setHomes(response);
    };

    fetchHomes();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={homes}
        renderItem={({ item }) => (
          <HomeCard
            home={item}
            onPress={() => navigation.navigate('HomeDetail', { home: item })}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default HomeListScreen;
