import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import { PlusCircle, Bell, Calendar, Pill } from 'lucide-react';
import { PetCard } from './PetCard';
import { Pet, HealthRecord, Medication } from '../types';

const mockPets: Pet[] = [
  {
    id: '1',
    name: 'Luna',
    species: 'Dog',
    breed: 'Golden Retriever',
    age: 3,
    weight: 28,
    avatar: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=200&h=200',
    lastCheckup: '2024-02-15',
    nextVaccination: '2024-04-20'
  },
  {
    id: '2',
    name: 'Oliver',
    species: 'Cat',
    breed: 'British Shorthair',
    age: 2,
    weight: 4.5,
    avatar: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=200&h=200',
    lastCheckup: '2024-03-01',
    nextVaccination: '2024-05-15'
  }
];

const mockWeightData = [
  { date: '2024-01', weight: 27.2, target: 27.5 },
  { date: '2024-02', weight: 27.5, target: 27.5 },
  { date: '2024-03', weight: 28.0, target: 27.5 }
];

const mockActivityData = [
  { name: 'Exercise', value: 35 },
  { name: 'Rest', value: 45 },
  { name: 'Play', value: 20 }
];

const mockMedications: Medication[] = [
  {
    id: '1',
    petId: '1',
    name: 'Heartworm Prevention',
    dosage: '1 tablet',
    frequency: 'Monthly',
    nextDue: '2024-04-01',
    timeOfDay: 'Morning'
  },
  {
    id: '2',
    petId: '1',
    name: 'Joint Supplement',
    dosage: '2 tablets',
    frequency: 'Daily',
    nextDue: '2024-03-21',
    timeOfDay: 'Evening'
  }
];

const mockAppointments = [
  {
    id: '1',
    petId: '1',
    date: '2024-04-15T10:00:00',
    type: 'Checkup',
    notes: 'Annual wellness exam'
  },
  {
    id: '2',
    petId: '2',
    date: '2024-04-20T14:30:00',
    type: 'Vaccination',
    notes: 'Rabies booster'
  }
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

export function Dashboard() {
  return (
    <div className="py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 dark:text-white"
        >
          Pet Health Dashboard
        </motion.h1>
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <PlusCircle className="w-5 h-5" />
            <span>Add Pet</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors relative"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {mockPets.map((pet) => (
          <motion.div
            key={pet.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <PetCard pet={pet} onClick={() => console.log('Pet clicked:', pet.id)} />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Medications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Medications
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-purple-600 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900 rounded-lg transition-colors"
            >
              <Pill className="w-5 h-5" />
            </motion.button>
          </div>
          <div className="space-y-4">
            {mockMedications.map((med) => (
              <div
                key={med.id}
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {med.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {med.dosage} - {med.frequency}
                    </p>
                  </div>
                  <span className="text-sm text-purple-600 dark:text-purple-300">
                    {med.timeOfDay}
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Next: {new Date(med.nextDue).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Appointments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Upcoming Appointments
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-purple-600 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900 rounded-lg transition-colors"
            >
              <Calendar className="w-5 h-5" />
            </motion.button>
          </div>
          <div className="space-y-4">
            {mockAppointments.map((apt) => (
              <div
                key={apt.id}
                className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {apt.type}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(apt.date).toLocaleString()}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {apt.notes}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Activity Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Daily Activity
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockActivityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {mockActivityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {mockActivityData.map((entry, index) => (
                <div key={entry.name} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {entry.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Weight Tracking */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Weight Tracking
        </h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockWeightData}>
              <defs>
                <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="weight"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#weightGradient)"
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke="#82ca9d"
                strokeDasharray="5 5"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}