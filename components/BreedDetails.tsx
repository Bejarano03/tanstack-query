import React from 'react';
import { View, Text } from 'react-native';
import { useBreedDetails } from '../hooks/useBreedDetails';

interface BreedDetailsProps {
  breedId: string;
}

const BreedDetails: React.FC<BreedDetailsProps> = ({ breedId }) => {
  const { data, isLoading, isError, error } = useBreedDetails(breedId);

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>An error occurred: {error.message}</Text>;

  return (
    <View>
      {data && (
        <>
          <Text>Name: {data.attributes.name}</Text>
          <Text>Description: {data.attributes.description}</Text>
        </>
      )}
    </View>
  );
};

export default BreedDetails;
