import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);

  const handleNotificationsToggle = () => {
    setNotificationsEnabled((prevState) => !prevState);
  };

  const handleLocationToggle = () => {
    setLocationEnabled((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={handleNotificationsToggle}
        />
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingLabel}>Location Services</Text>
        <Switch value={locationEnabled} onValueChange={handleLocationToggle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  settingLabel: {
    fontSize: 16,
  },
});

export default SettingsScreen;
