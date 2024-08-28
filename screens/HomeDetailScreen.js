import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';
import { getDistance } from '../utils/locationUtils';
import * as Notifications from 'expo-notifications';

const HomeDetailScreen = ({ route }) => {
  const { home } = route.params;
  const [canUnlock, setCanUnlock] = useState(false);

  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'Notification permissions are required to send notifications.');
      }
      console.log("Notification permissions status:", status);
    };
    requestPermissions();
  }, []);

  const scheduleNotification = async (title, body) => {
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title,
          body,
          sound: true, // Ensure the notification has a sound
          vibrate: [0, 250, 250, 250], // Vibrate pattern for the notification
          priority: Notifications.AndroidNotificationPriority.MAX, // High priority notification
        },
        trigger: { seconds: 1 }, // Trigger after 1 second
      });
      console.log("Notification scheduled:", title, body);
    } catch (error) {
      console.log("Error scheduling notification", error);
    }
  };
  

  useEffect(() => {
    if (canUnlock) {
      console.log("Scheduling proximity notification");
      scheduleNotification("You're near the home!", "You can now unlock the home.");
    }
  }, [canUnlock]);

  useEffect(() => {
    const checkProximity = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'Location permission is required to unlock the home');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log("Location:", location);
      const distance = getDistance(location.coords, home.location);
      console.log("Distance to home:", distance);
      setCanUnlock(distance <= 300000000); // Example proximity of 300 meters
    };

    checkProximity();
  }, []);

  const handleUnlock = () => {
    if (canUnlock) {
      Alert.alert('Success', 'Home unlocked successfully!');
      console.log("Scheduling unlock notification");
      scheduleNotification("Home Unlocked!", "You have successfully unlocked the home.");
    } else {
      Alert.alert('Error', 'You are too far from the home to unlock it.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.address}>{home.address}</Text>
      <Text>{home.description}</Text>
      {canUnlock && <Button title="Unlock Home" onPress={handleUnlock} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  address: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
});

export default HomeDetailScreen;
