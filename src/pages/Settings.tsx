import { useState } from 'react';
import { motion } from 'framer-motion';
import useStore from '../store';

const Settings = () => {
  const { userSettings, updateSettings } = useStore();
  const [formData, setFormData] = useState(userSettings);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(formData);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-800 mb-6"
      >
        Settings
      </motion.h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Security</h2>
          <div className="space-y-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="biometricAuth"
                checked={formData.biometricAuth}
                onChange={handleChange}
                className="rounded text-blue-500"
              />
              <span>Enable Biometric Authentication</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="autoLock"
                checked={formData.autoLock}
                onChange={handleChange}
                className="rounded text-blue-500"
              />
              <span>Auto-lock after 5 minutes of inactivity</span>
            </label>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Notifications</h2>
          <div className="space-y-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="passwordExpiry"
                checked={formData.passwordExpiry}
                onChange={handleChange}
                className="rounded text-blue-500"
              />
              <span>Notify when passwords are about to expire</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="costAlerts"
                checked={formData.costAlerts}
                onChange={handleChange}
                className="rounded text-blue-500"
              />
              <span>Alert for upcoming subscription renewals</span>
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Save Settings
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default Settings;