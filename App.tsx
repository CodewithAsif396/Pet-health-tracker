import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Tabs from '@radix-ui/react-tabs';
import { Home, Image, FileText, Menu, X } from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { Gallery } from './components/Gallery';
import { HealthRecords } from './components/HealthRecords';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const TabButton = ({ value, icon: Icon, label }: { value: string; icon: any; label: string }) => (
    <Tabs.Trigger
      value={value}
      onClick={() => setIsMobileMenuOpen(false)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
        activeTab === value
          ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300'
          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="hidden md:inline">{label}</span>
    </Tabs.Trigger>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Pet Health</h1>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute inset-x-0 top-16 bg-white dark:bg-gray-800 shadow-lg z-50"
            >
              <Tabs.List className="flex flex-col p-4 space-y-2">
                <TabButton value="dashboard" icon={Home} label="Dashboard" />
                <TabButton value="gallery" icon={Image} label="Gallery" />
                <TabButton value="records" icon={FileText} label="Records" />
              </Tabs.List>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Navigation */}
        <Tabs.List className="hidden md:flex justify-center space-x-4 p-4 bg-white dark:bg-gray-800 shadow-md">
          <TabButton value="dashboard" icon={Home} label="Dashboard" />
          <TabButton value="gallery" icon={Image} label="Gallery" />
          <TabButton value="records" icon={FileText} label="Records" />
        </Tabs.List>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="container mx-auto px-4 md:px-6"
          >
            <Tabs.Content value="dashboard">
              <Dashboard />
            </Tabs.Content>
            <Tabs.Content value="gallery">
              <Gallery />
            </Tabs.Content>
            <Tabs.Content value="records">
              <HealthRecords />
            </Tabs.Content>
          </motion.div>
        </AnimatePresence>
      </Tabs.Root>
    </div>
  );
}

export default App;