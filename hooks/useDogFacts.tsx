// src/hooks/useDogFacts.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { DogFact } from '../app/types';

const fetchDogFacts = async (): Promise<DogFact[]> => {
  const response = await axios.get<{ data: DogFact[] }>('https://dogapi.dog/api/v2/facts');
  return response.data.data;
  console.log(response)
};



export const useDogFacts = () => {
  return useQuery<DogFact[], Error>({
    queryKey: ['dogFacts'],
    queryFn: fetchDogFacts,
  });
};
