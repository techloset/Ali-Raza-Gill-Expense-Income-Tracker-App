import {View, Text, Button} from 'react-native';
import {useState} from 'react';
import {db} from '../../../config/Firebase';
import {TextInput} from 'react-native-gesture-handler';

export default function AddTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const addTodoHandler = async () => {
    try {
      const result = await db.collection('practicetodos').add({
        title: 'Firebase added successfully',
        description: 30,
        createdAt: new Date(),
      });
      console.log('results', result);
    } catch (error) {
      console.log('Error occured', error);
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>AddTodo</Text>
      <TextInput
        placeholder="Enter Title"
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        placeholder="Enter Description"
        onChangeText={text => setDescription(text)}
      />

      <Button title="Create new Todo" onPress={addTodoHandler} />
    </View>
  );
}
