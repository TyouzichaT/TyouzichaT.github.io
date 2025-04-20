import { motion } from "framer-motion";

interface DashboardSummaryProps {
  fedFundsRate: {
    lower: number | undefined;
    upper: number | undefined;
  };
  pceLevelValue: number | undefined;
}

const DashboardSummary = ({ fedFundsRate, pceLevelValue }: DashboardSummaryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-left">
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-blue-800"
      >
        <h3 className="text-lg font-semibold text-blue-300 mb-2">Current Economic Phase</h3>
        <p className="text-2xl font-bold text-white mb-1">Late Cycle</p>
        <p className="text-sm text-gray-300">Economy showing signs of slowing but still expanding</p>
      </motion.div>
      
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-purple-800"
      >
        <h3 className="text-lg font-semibold text-purple-300 mb-2">Inflation Trend</h3>
        <p className="text-2xl font-bold text-white mb-1">Moderating</p>
        <p className="text-sm text-gray-300">Core PCE: {pceLevelValue ? pceLevelValue.toFixed(2) : "N/A"}</p>
      </motion.div>
      
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="bg-red-900/30 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-red-800"
      >
        <h3 className="text-lg font-semibold text-red-300 mb-2">Interest Rate Outlook</h3>
        <p className="text-2xl font-bold text-white mb-1">Cuts Expected</p>
        <p className="text-sm text-gray-300">Fed Funds: {
          fedFundsRate.lower !== undefined && fedFundsRate.upper !== undefined
            ? `${fedFundsRate.lower}%-${fedFundsRate.upper}%`
            : "N/A"
        }</p>
      </motion.div>
    </div>
  );
};

export default DashboardSummary; 