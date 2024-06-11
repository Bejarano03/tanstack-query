// src/App.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BreedsList from '../components/BreedsList';
import BreedDetails from '../components/BreedDetails';
import DogFacts from '../components/DogFacts';
import DogGroups from '../components/DogGroups';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [selectedBreedId, setSelectedBreedId] = useState<string | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <Text style={styles.header}>Dog Breeds</Text>
        <BreedsList setSelectedBreedId={setSelectedBreedId} />
        {selectedBreedId && <BreedDetails breedId={selectedBreedId} />}
        <Text style={styles.header}>Dog Facts</Text>
        <DogFacts />
        <Text style={styles.header}>Dog Groups</Text>
        <DogGroups />
      </View>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;
