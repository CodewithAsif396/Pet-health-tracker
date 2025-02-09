import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Activity, Syringe, Weight, Stethoscope, Pill as Pills, Search, Plus } from 'lucide-react';
import type { HealthRecord } from '../types';

const mockRecords: HealthRecord[] = [
  {
    id: '1',
    petId: '1',
    date: '2024-03-15',
    type: 'vaccination',
    description: 'Annual vaccination',
    notes: 'DHPP booster, Rabies vaccine renewed',
    provider: 'Dr. Smith'
  },
  {
    id: '2',
    petId: '1',
    date: '2024-03-01',
    type: 'weight',
    description: 'Monthly weight check',
    value: 28,
    notes: 'Weight stable, within healthy range',
    provider: 'Dr. Johnson'
  },
  {
    id: '3',
    petId: '1',
    date: '2024-02-15',
    type: 'checkup',
    description: 'Routine checkup',
    notes: 'All vitals normal, coat healthy',
    provider: 'Dr. Smith'
  }
];

const getIconForType = (type: string) => {
  switch (type) {
    case 'vaccination':
      return <Syringe className="w-6 h-6 text-purple-600 dark:text-purple-300" />;
    case 'weight':
      return <Weight className="w-6 h-6 text-purple-600 dark:text-purple-300" />;
    case 'checkup':
      return <Stethoscope className="w-6 h-6 text-purple-600 dark:text-purple-300" />;
    case 'medication':
      return <Pills className="w-6 h-6 text-purple-600 dark:text-purple-300" />;
    default:
      return <Activity className="w-6 h-6 text-purple-600 dark:text-purple-300" />;
  }
};

export function HealthRecords() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 dark:text-white"
        >
          Health Records
        </motion.h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Add Record</span>
        </motion.button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search records..."
            className="w-full px-4 py-2 pl-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      <div className="space-y-4">
        {mockRecords.map((record, index) => (
          <motion.div
            key={record.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                {getIconForType(record.type)}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {record.description}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {format(new Date(record.date), 'MMMM d, yyyy')}
                    </p>
                  </div>
                  <span className="text-sm text-purple-600 dark:text-purple-300">
                    {record.provider}
                  </span>
                </div>
                {record.value && (
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Value: {record.value}
                  </p>
                )}
                {record.notes && (
                  <p className="mt-2 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                    {record.notes}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}