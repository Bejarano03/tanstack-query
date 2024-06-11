import React from 'react';
import { View, Text } from 'react-native';
import { useDogFacts } from '../hooks/useDogFacts';

const DogFacts: React.FC = () => {
  const { data, isLoading, isError, error } = useDogFacts();

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>An error occurred: {error.message}</Text>;

  return (
    <View>
      {data && data.map((fact) => (
        <Text key={fact.id}>{fact.attributes.body}</Text>
      ))}
    </View>
  );
};

export default DogFacts;
