import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity, FlatList} from 'react-native';

// import { Container } from './styles';

const TechList = () => {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  function handleAddTech() {
    setTechs([...techs, 'Node.js']);
    setNewTech('');
  }

  return (
    <View>
      <FlatList
        data={techs}
        keyExtractor={(tech) => tech}
        renderItem={({item}) => <Text>{item}</Text>}
      />

      <TextInput
        testID="tech-input"
        value={newTech}
        onChangeText={setNewTech}
      />

      <TouchableOpacity onPress={handleAddTech}>
        <Text>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TechList;
