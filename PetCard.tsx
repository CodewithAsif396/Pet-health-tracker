import { motion } from 'framer-motion';
import { Calendar, Weight, Syringe, Clock } from 'lucide-react';
import type { Pet } from '../types';
import { format, parseISO } from 'date-fns';

interface PetCardProps {
  pet: Pet;
  onClick: () => void;
}

export function PetCard({ pet, onClick }: PetCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative w-20 h-20 rounded-full overflow-hidden"
        >
          <img
            src={pet.avatar}
            alt={pet.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
        </motion.div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {pet.name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            {pet.breed} • {pet.age} years old
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between text-gray-600 dark:text-gray-300">
          <div className="flex items-center space-x-2">
            <Weight className="w-4 h-4" />
            <span>Current Weight</span>
          </div>
          <span className="font-semibold">{pet.weight} kg</span>
        </div>

        <div className="flex items-center justify-between text-gray-600 dark:text-gray-300">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Last Checkup</span>
          </div>
          <span className="font-semibold">
            {format(parseISO(pet.lastCheckup), 'MMM d, yyyy')}
          </span>
        </div>

        <div className="flex items-center justify-between text-gray-600 dark:text-gray-300">
          <div className="flex items-center space-x-2">
            <Syringe className="w-4 h-4" />
            <span>Next Vaccination</span>
          </div>
          <span className="font-semibold">
            {format(parseISO(pet.nextVaccination), 'MMM d, yyyy')}
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
        >
          <Clock className="w-4 h-4" />
          <span>Schedule Visit</span>
        </motion.button>
      </div>
    </motion.div>
  );
}