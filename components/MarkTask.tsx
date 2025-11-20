import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Task } from '../types/Task';

interface MarkTaskProps {
  task: Task;
  onToggle: (id: string) => void;
}

export default function MarkTask({ task, onToggle }: MarkTaskProps) {
  return (
    <View style={styles.taskItem}>
      <Text
        style={[styles.taskText, task.completed && styles.completedTask]}
        onPress={() => onToggle(task.id)}
      >
        {task.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    padding: 15,
  },
  taskText: {
    fontSize: 16,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});
