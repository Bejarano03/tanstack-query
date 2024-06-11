import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { DogGroup } from '../app/types';

const fetchDogGroups = async (): Promise<DogGroup[]> => {
  const response = await axios.get<{ data: DogGroup[] }>('https://dogapi.dog/api/v2/groups');
  return response.data.data;
};

export const useDogGroups = () => {
  return useQuery<DogGroup[], Error>({
    queryKey: ['dogGroups'],
    queryFn: fetchDogGroups,
  });
};
