import { motion } from 'framer-motion';
import useStore from '../store';

const CostTracker = () => {
  const { costs, loading } = useStore();

  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-800 mb-6"
      >
        Subscription Cost Tracker
      </motion.h1>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="space-y-6">
          {costs.length > 0 ? (
            costs.map((cost, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold text-blue-600 mb-2">{cost.service}</h2>
                <p className="text-gray-600 mb-4">Cost: {cost.currency} {cost.amount}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Renews on: {cost.renewalDate}</span>
                  <button className="text-blue-500 hover:text-blue-700">Edit</button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-gray-600">No costs found. Add your first subscription.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CostTracker;