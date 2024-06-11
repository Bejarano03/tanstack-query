import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useBreeds } from '../hooks/useBreeds';

interface BreedsListProps {
  setSelectedBreedId: (id: string) => void;
}

const BreedsList: React.FC<BreedsListProps> = ({ setSelectedBreedId }) => {
  const { data, isLoading, isError, error } = useBreeds();

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>An error occurred: {error.message}</Text>;

  return (
    <View>
      {data && data.map((breed) => (
        <TouchableOpacity key={breed.id} onPress={() => setSelectedBreedId(breed.id)}>
          <Text>{breed.attributes.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BreedsList;
