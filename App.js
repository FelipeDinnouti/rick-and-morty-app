import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';

import CharacterApi from './src/CharacterApi.js';
import CharacterItem from './src/CharacterItem.js';

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadCharacters = async () => {
    try {
      const response = await CharacterApi.get("/");
      setCharacters(response.data.results);
    } catch (error) {
      console.log("Error fetching characters:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rick and Morty Characters</Text>
      <FlatList
        data={characters}
        // React uses the as a unique identifier for the item, meaning it can re-render it properly
        keyExtractor={(item) => item.id.toString()}
        // How it renders the item  
        renderItem={({item}) => <CharacterItem image={item.image} name={item.name} status={item.status} species={item.species}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222531',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    marginBottom: 20,
    marginTop: 60,
    marginHorizontal: 40,
    fontSize: 32,
    textAlign: 'center'
  },
  list: {
    height: 600
  }
});
