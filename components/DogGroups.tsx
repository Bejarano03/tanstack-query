import React from 'react';
import { View, Text } from 'react-native';
import { useDogGroups } from '../hooks/useDogGroups';

const DogGroups: React.FC = () => {
  const { data, isLoading, isError, error } = useDogGroups();

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>An error occurred: {error.message}</Text>;

  return (
    <View>
      {data && data.map((group) => (
        <Text key={group.id}>{group.attributes.name}</Text>
      ))}
    </View>
  );
};

export default DogGroups;
