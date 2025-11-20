import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { Task } from '../types/Task';
import AddTask from './AddTask';
import MarkTask from './MarkTask';

interface ViewTasksProps {
  tasks: Task[];
  onAddTask: (text: string) => void;
  onMarkTask: (id: string) => void;
}

export default function ViewTasks({ tasks, onAddTask, onMarkTask }: ViewTasksProps) {
  const renderItem = ({ item }: { item: Task }) => (
    <MarkTask task={item} onToggle={onMarkTask} />
  );

  return (
    <View style={styles.container}>
      <AddTask onAddTask={onAddTask} />
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No tasks yet</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#999',
  },
});