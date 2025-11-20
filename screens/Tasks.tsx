import React from 'react';
import { View, StyleSheet } from 'react-native';
import ViewTasks from '../components/ViewTasks';
import Marktask from '../components/MarkTask';

export default function Tasks() {
  return (
    <View style={styles.container}>
      <ViewTasks />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});