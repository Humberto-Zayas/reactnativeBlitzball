import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState('');
  const [attack, setAttack] = useState('');
  const [defend, setDefend] = useState('');
  const [block, setBlock] = useState('');



  const handleSubmit = () => {
    const data = {
      name: name,
      attack: attack,
      defend: defend,
      block: block,
    };

    fetch('http://localhost:3000/players', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetch('http://localhost:3000/players')
      .then(response => response.json())
      .then(data => setPlayers(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>

      {players.map(player => (
        <View key={player._id}>

          <Text>Name: {player.name}</Text>
          <Text>Attack: {player.attack}</Text>
          <Text>Defend: {player.defend}</Text>
          <Text>Block: {player.block}</Text>
        </View>
      ))}
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={setName}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Attack"
          onChangeText={setAttack}
          value={attack}
        />
        <TextInput
          style={styles.input}
          placeholder="Defend"
          onChangeText={setDefend}
          value={defend}
        />
        <TextInput
          style={styles.input}
          placeholder="Block"
          onChangeText={setBlock}
          value={block}
        />
        <Button title="Create Player" onPress={handleSubmit} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
