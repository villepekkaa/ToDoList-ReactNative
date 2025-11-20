import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ViewTasks from '../components/ViewTasks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../types/Task';

const STORAGE_KEY = 'TODO_LIST_ITEMS';

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const loadTasks = async () => {
    try {
      const json = await AsyncStorage.getItem(STORAGE_KEY);
      if (json) setTasks(JSON.parse(json));
    } catch (e) {
      // handle error
    }
  };

  const addTask = (text: string) => {
    setTasks(prev => [
      ...prev,
      { id: Date.now().toString(), text, completed: false },
    ]);
  };

  const markTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <ViewTasks tasks={tasks} onAddTask={addTask} onMarkTask={markTask} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});