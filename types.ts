export interface Pet {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  weight: number;
  avatar: string;
  lastCheckup: string;
  nextVaccination: string;
}

export interface HealthRecord {
  id: string;
  petId: string;
  date: string;
  type: 'vaccination' | 'checkup' | 'medication' | 'weight';
  description: string;
  value?: number;
  notes?: string;
  provider?: string;
}

export interface Appointment {
  id: string;
  petId: string;
  date: string;
  type: string;
  notes: string;
}

export interface Medication {
  id: string;
  petId: string;
  name: string;
  dosage: string;
  frequency: string;
  nextDue: string;
  timeOfDay: string;
}