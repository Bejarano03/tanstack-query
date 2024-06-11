// src/types.ts
export interface Breed {
    id: string;
    attributes: {
      name: string;
      description: string;
    };
  }
  
  export interface DogFact {
    id: string;
    attributes: {
      body: string;
    };
  }
  
  export interface DogGroup {
    id: string;
    attributes: {
      name: string;
    };
  }
  