import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Breed } from '../app/types';

const fetchBreedDetails = async (id: string): Promise<Breed> => {
  const response = await axios.get<{ data: Breed }>(`https://dogapi.dog/api/v2/breeds/${id}`);
  return response.data.data;
};

export const useBreedDetails = (id: string) => {
  return useQuery<Breed, Error>({
    queryKey: ['breed', id],
    queryFn: () => fetchBreedDetails(id),
  });
};
