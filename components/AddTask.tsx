import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';

interface AddTaskProps {
  onAddTask: (text: string) => void;
}

export default function AddTask({ onAddTask }: AddTaskProps) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim()) {
      onAddTask(input.trim());
      setInput('');
    }
  };

  return (
    <View style={styles.inputRow}>
      <TextInput 
        placeholder='Enter task'
        value={input}
        onChangeText={setInput}
        style={styles.input}
      />
      <Button title="Add" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 8,
    marginRight: 8,
  }
});
