import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Breed } from '../app/types';

const fetchBreeds = async (): Promise<Breed[]> => {
  const response = await axios.get<{ data: Breed[] }>('https://dogapi.dog/api/v2/breeds');
  return response.data.data;
};

export const useBreeds = () => {
  return useQuery<Breed[], Error>({
    queryKey: ['breeds'],
    queryFn: fetchBreeds,
  });
};
